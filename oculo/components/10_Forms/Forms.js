import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Panel, Col, Button } from 'react-bootstrap'
import { generateUuid } from '../../utility/helper'
import { defaultPrimaryButtonStyle } from './../../common'

// https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php
// https://uxplanet.org/designing-more-efficient-forms-structure-inputs-labels-and-actions-e3a47007114f

const description = `
# Layout
* Use panel to differentiate sections of a form if they are all in a single view
* Do not have forms with multiple columns
* Preferably use vertical forms only
* If the purpose of form is to create a new item, use vertical forms
* If the pupose of the form is the edit/update an existing item, use horizontal forms
* Very short forms : 2 fields or less
* Short forms : 3 to 6 fields
* Long forms : > 6 fields

# Input Fields
* For a multiple choice input field
  * with 5 of less selections, use a radio button group / button group
  * with 5 of more, use a dropdown
* Set a default value if the input is the same most of the time ie: "Not applicable, Not available"
* Set smart defaults where possible. (ie: if you know a the location of user)
* Set placeholder text for short forms
* Indicate to user which fields are mandatory.
 * If a symbol/icon (ie: asterisk) is use to indicate a mandatory field, ensure the symbol has a description on the view
  * For long forms use a symbol/icon
  * For short forms, label the field as mandatory. If form has 5 fields or less
* Minimize fields if possible.
 * Dates/time should have a date/time picker
* For very simple forms (2 fields or less), use input field without labels with a placeholder value

# Labels
* Use short labels, restrict to one or two words
* Do not capitalize all letter in a label
* Use sentence case (ie: capitalise the first letter of every word)
* Use right aligned labels for hozirontal forms
* Use top aliged labels for vertical forms

# Buttons
* Use button with only a noun
* Call to action button to be right aligned on the page

# Validation
* Perform validation on the fly where possible

# Visual feedback
* If an button action causes the whole form to be processed, show a progress indicator and disable the page
* If an button action causes only a portion of the form to be process, show a progress indicator on the button
* Provide visual feedback beside the input label for any validation issues

# Assistive popups ?

# Technical
* Use data-id instead of ids or className to identify elements to decouple CSS selectors from testing
`

const formTextFieldsGroup1 = [
  {
    dataId : 'first-name',
    controlLabeText: 'First Name',
    placeholderText: 'John',
    type: 'text'
  },
  {
    dataId : 'surname',
    controlLabeText: 'Surname',
    placeholderText: 'Smith',
    type: 'text'
  },
  {
    dataId : 'aphra-number',
    controlLabeText: 'APHRA Number',
    placeholderText: '012345A',
    type: 'text'
  }
]

const formTextFieldsGroup2 = [
  {
    dataId : 'phone',
    controlLabeText: 'Phone',
    placeholderText: '0400001234',
    type: 'text'
  },
  {
    dataId : 'email',
    controlLabeText: 'Email',
    placeholderText: 'JohnSmith@oculo.com.au',
    type: 'email'
  }
]

export default class extends Component {
  static styleguide = {
    index: '10.1',
    category: 'Forms',
    title: 'Forms',
    description,
    code: `
    `
  }

  renderVerticalFormTextField = ({ dataId, controlLabeText, placeholderText, type }) => {
    return (
      <FormGroup data-id={dataId} key={`dataId-${generateUuid()}`}>
        <ControlLabel>{controlLabeText}</ControlLabel>
          <FormControl
            type={type}
            placeholder={placeholderText}
          />
      </FormGroup>
    )
  }

  renderHorizontalFormTextField = ({ dataId, controlLabeText, placeholderText, type }) => {
    return (
      <FormGroup data-id={dataId} key={`dataId-${generateUuid()}`}>
        <Col sm={3} className="text-right"><ControlLabel>{controlLabeText}</ControlLabel></Col>
        <Col sm={7}><FormControl type={type} placeholder={placeholderText} /></Col>
      </FormGroup>
    )
  }

  render () {
    return (
      <div>
        <Col sm={4}>
          <h1>Vertical Form - Creating a new item</h1>
          <Panel header="Personal Details">
            <Form>
              {formTextFieldsGroup1.map( (textField) => this.renderVerticalFormTextField(textField) )}
              {formTextFieldsGroup2.map( (textField) => this.renderVerticalFormTextField(textField) )}
            </Form>
            <hr />
            <Button className="pull-right" style={defaultPrimaryButtonStyle}>Update</Button>
          </Panel>
        </Col>

        <Col sm={4}>
          <h1>Horizontal Form - Updating an existing item</h1>
          <Panel header="Personal Details">
            <Form horizontal>
              {formTextFieldsGroup1.map( (textField) => this.renderHorizontalFormTextField(textField) )}
              {formTextFieldsGroup2.map( (textField) => this.renderHorizontalFormTextField(textField) )}
            </Form>
            <hr />
            <Button className="pull-right" style={defaultPrimaryButtonStyle}>Update</Button>
          </Panel>
        </Col>
      </div>
    )
  }
}
