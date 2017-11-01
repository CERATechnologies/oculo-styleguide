import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { flatColor,
         defaultButtonStyle,
         defaultPrimaryButtonStyle,
         defaultSecondaryButtonStyle,
         defaultSmallButtonStyle
       } from './../../common'
import { FaDownload, FaEdit, FaClockO } from 'react-icons/lib/fa/'

const style = {
  border: '2px solid',
  borderColor: flatColor.orangePrimary.hex,
  color: flatColor.orangePrimary.hex,
  padding: '5px 11px',
  backgroundColor:  flatColor.whitePrimary.hex,
}

export default class extends Component {
  static styleguide = {
    index: '1.1',
    category: 'Buttons',
    title: 'Buttons',
    description:
`
* Non-form button must have an icon and description of the button  (may be this should be in the form guide cateogory?)
* Form button must only contain a description of the button (may be this should be in the form guide cateogory?)

# Button naming/display guideline ...
If space permits, use the naming convention in the following order
* Naming style \`IVN\` : [Fontawesome Icon] + [Verb] + [Noun]
* Naming style \`VN\`[Verb] + [Noun]
* Naming style \`V\`[Verb]
* Capitalize all words in button description
* Use fontawesome icons only
* Avoid naming like Create New, New Referral.
* Avoid a button with only an icon with no description

# Button usage guideline ...
* When view has multiple or no clear/obvious context in a single view, use \`IVN\` or \`VN\`. Example : Create Referral, Download Eye Report
* When view has a clear and obvious context, use \`V\`
* Small button should only be used to perform action on items in a list
* Avoid adding multiple primary buttons in a view where there is only a single context, if that happens, you might wanna rethink of relocating the form or the context to its self contained area
`,
    code: `
    [placeholder]
    `
  }

  render () {
    return (
      <div>
        <h1>Primary Buttons</h1>
        <h3>Active State</h3>
        <Button style={defaultPrimaryButtonStyle}>Download Referral</Button>
        <Button style={defaultPrimaryButtonStyle}>
          <FaDownload size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>Download Referral
        </Button>

        <Button style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.bluePrimary.hex, borderColor: flatColor.bluePrimary.hex}}>View Patient</Button>
        <Button style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.yellowPrimary.hex, borderColor: flatColor.yellowPrimary.hex}}>Add Provider</Button>
        <Button style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, borderColor: flatColor.greenPrimary.hex}}>Create Patient</Button>
        <Button style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, borderColor: flatColor.greenPrimary.hex}}>Save</Button>



        <h3>Disabled State</h3>
        <Button disabled style={defaultPrimaryButtonStyle}>Download Referral</Button>
        <Button disabled style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.bluePrimary.hex, borderColor: flatColor.bluePrimary.hex}}>View Patient</Button>
        <Button disabled style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.yellowPrimary.hex, borderColor: flatColor.yellowPrimary.hex}}>Add Provider</Button>
        <Button disabled style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, borderColor: flatColor.greenPrimary.hex}}>Create Patient</Button>

        <h1>Secondary buttons</h1>
        <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>Create Eye Report</Button>
        <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>
          <FaClockO size={18} color={flatColor.orangePrimary.hex} style={{ marginRight: '8px' }}/>Book Appointment
        </Button>
        <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.bluePrimary.hex, color: flatColor.grayPrimary.hex }}>Create Referral</Button>
        <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.yellowPrimary.hex, color: flatColor.grayPrimary.hex }}>Withdraw</Button>
        <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.greenPrimary.hex, color: flatColor.grayPrimary.hex }}>Redirect</Button>
        <Button style={{... defaultSecondaryButtonStyle, backgroundColor: flatColor.whitePrimary.hex, borderColor: flatColor.grayPrimary.hex}}>Cancel</Button>

        <h1>Small buttons</h1>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.grayPrimary.hex }}>Add</Button>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.bluePrimary.hex, color: flatColor.grayPrimary.hex }}>Expand</Button>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.yellowPrimary.hex, color: flatColor.grayPrimary.hex }}>Close</Button>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.greenPrimary.hex, color: flatColor.grayPrimary.hex }}>Remove</Button>
      </div>
    )
  }
}
