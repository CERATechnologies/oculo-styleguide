import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Panel } from 'react-bootstrap'

// https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php
// https://uxplanet.org/designing-more-efficient-forms-structure-inputs-labels-and-actions-e3a47007114f

const description = `
# Layout
* Use panel to differentiate sections of a form if they are all in a single view
* Do not have forms with multiple columns
* Preferably use vertical forms only
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
`

export default class extends Component {
  static styleguide = {
    index: '10.1',
    category: 'Forms',
    title: 'Forms',
    description,
    code: `
    `
  }

  render () {
    return (
        <Panel header={'Referral'} bsStyle="info">
          <Panel header={'Reason For Referral'}>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  type="text"
                  value={'abc'}
                  placeholder="Enter text"
                  onChange={() => console.log('form')}
                />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </Panel>
        </Panel>
    )
  }
}
