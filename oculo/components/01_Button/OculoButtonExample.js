import React, { Component } from 'react'
import { Row, Col, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { flatColor,
         defaultButtonStyle,
         defaultPrimaryButtonStyle,
         defaultSecondaryButtonStyle,
         defaultSmallButtonStyle
       } from './../../common'
import { FaDownload,
         FaEdit,
         FaClockO,
         FaStreetView,
         FaPlusSquareO,
         FaPlusCircle,
         FaUserPlus,
         FaCloudDownload,
         FaFloppyO,
         FaFolder,
         FaFolderO,
         FaCheckSquareO,
         FaEye,
         FaFileText,
         FaRotateLeft,
         FaChainBroken,
         FaTimesCircle,
         FaPencil
       } from 'react-icons/lib/fa/'

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
* CTA button must be on the right of a form (may be this should be in the form guide cateogory?)
* CTA button does not need an icon (may be this should be in the form guide cateogory?)
* form category - if selection is less than 7. use toggle button groups

# How to NAME buttons ...
If space permits, use the naming convention in the following order
* Naming style \`IVN\` : [Fontawesome Icon] + [Verb] + [Noun]
* Naming style \`VN\` : [Verb] + [Noun]
* Naming style \`V\` : [Noun]
* Capitalize all words in button description
* Use fontawesome icons only
* Avoid naming like Create New, New Referral.
* Avoid a button with only an icon with no description

# How to USE buttons  ...
* When a view has multiple or no clear/obvious, use \`IVN\` or \`VN\`. Example : Create Referral, Download Eye Report
* When view has a clear and obvious context, use \`V\`
* Small button should only be used to perform action on items in a list
* Small button should only have a \`N\` as its description
* Avoid adding multiple primary buttons in a view where there is only a single context, if that happens, you might wanna rethink of relocating the form or the context to its self contained area

# Other
* Ensure button does not have blue borders/highlights when button clicked [TODO]
`,
    code: `
Code snippet:

<Button>Download Referral</Button>

<Button><FaStreetView size={20}/>View Patient</Button>
    `
  }

  render () {
    return (
      <div>
        <h1>Primary Buttons</h1>
        <h3>Active State</h3>
        <Row>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>Download Referral</Button>
          </Col>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>
              <FaDownload size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>Download Referral
              </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.bluePrimary.hex, borderColor: flatColor.bluePrimary.hex}}>View Patient</Button>
          </Col>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.bluePrimary.hex, borderColor: flatColor.bluePrimary.hex}}>
              <FaStreetView size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>
              View Patient
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.yellowPrimary.hex, borderColor: flatColor.yellowPrimary.hex}}>Add Provider</Button>
          </Col>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.yellowPrimary.hex, borderColor: flatColor.yellowPrimary.hex}}>
              <FaPlusCircle size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>
              Add Provider
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, borderColor: flatColor.greenPrimary.hex}}>Create Patient</Button>
          </Col>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, borderColor: flatColor.greenPrimary.hex}}>
              <FaUserPlus size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>
              Create Patient
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, color:flatColor.grayPrimary.hex, backgroundColor: flatColor.whiteShade1.hex, borderColor: flatColor.whiteShade1.hex}}>Mark as Read</Button>
          </Col>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, color: flatColor.grayShade1.hex, backgroundColor: flatColor.whiteShade1.hex, borderColor: flatColor.whiteShade1.hex}}>
              <FaCheckSquareO size={20} color={flatColor.grayPrimary.hex} style={{ marginRight: '5px' }}/>
              Mark as Read
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>Save</Button>
          </Col>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>
              <FaFolder size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>
              Save
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>Update</Button>
          </Col>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>
              <FaPencil size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>
              Update
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>Add</Button>
          </Col>
          <Col md={6}>
            <Button style={defaultPrimaryButtonStyle}>
              <FaPlusCircle size={20} color={flatColor.whitePrimary.hex} style={{ marginRight: '5px' }}/>
              Add
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, color: flatColor.grayShade1.hex, backgroundColor: flatColor.whiteShade1.hex, borderColor: flatColor.whiteShade1.hex}}>Cancel</Button>
          </Col>
          <Col md={6}>
            <Button style={{...defaultPrimaryButtonStyle, color: flatColor.grayShade1.hex, backgroundColor: flatColor.whiteShade1.hex, borderColor: flatColor.whiteShade1.hex}}>
              <FaTimesCircle size={20} color={flatColor.grayShade1.hex} style={{ marginRight: '5px' }}/>
              Cancel
            </Button>
          </Col>
        </Row>

        <h1>Secondary buttons</h1>
        <Row>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>Create Referral</Button>
          </Col>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>
              <FaFileText size={20} color={flatColor.orangePrimary.hex} style={{ marginRight: '8px' }}/>
              Create Referral
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>Create Eye Report</Button>
          </Col>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>
              <FaEye size={20} color={flatColor.orangePrimary.hex} style={{ marginRight: '8px' }}/>
              Create Eye Report
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>Book Appointment</Button>
          </Col>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>
              <FaClockO size={20} color={flatColor.orangePrimary.hex} style={{ marginRight: '8px' }}/>
              Book Appointment
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.bluePrimary.hex, color: flatColor.bluePrimary.hex }}>Create Referral</Button>
          </Col>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.bluePrimary.hex, color: flatColor.bluePrimary.hex }}>
              <FaFileText size={20} color={flatColor.bluePrimary.hex} style={{ marginRight: '8px' }}/>
              Create Referral</Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.greenPrimary.hex, color: flatColor.greenPrimary.hex }}>Redirect</Button>
          </Col>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.greenPrimary.hex, color: flatColor.greenPrimary.hex }}>
              <FaStreetView size={20} color={flatColor.greenPrimary.hex} style={{ marginRight: '8px' }}/>
              View Profile
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.yellowPrimary.hex, color: flatColor.yellowPrimary.hex }}>Withdraw</Button>
          </Col>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.yellowPrimary.hex, color: flatColor.yellowPrimary.hex }}>
              <FaChainBroken size={20} color={flatColor.yellowPrimary.hex} style={{ marginRight: '8px' }}/>
              Withdraw
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.greenPrimary.hex, color: flatColor.greenPrimary.hex }}>Redirect</Button>
          </Col>
          <Col md={6}>
            <Button style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.greenPrimary.hex, color: flatColor.greenPrimary.hex }}>
              <FaRotateLeft size={20} color={flatColor.greenPrimary.hex} style={{ marginRight: '8px' }}/>
              Redirect
            </Button>
          </Col>
        </Row>


        <Row>
          <Col md={6}>
            <Button style={{...defaultSecondaryButtonStyle, backgroundColor: flatColor.whitePrimary.hex, borderColor: flatColor.grayPrimary.hex}}>Cancel</Button>
          </Col>
          <Col md={6}>
            <Button style={{...defaultSecondaryButtonStyle, backgroundColor: flatColor.whitePrimary.hex, borderColor: flatColor.grayPrimary.hex}}>
              <FaTimesCircle size={20} color={flatColor.grayPrimary.hex} style={{ marginRight: '8px' }}/>
              Cancel
            </Button>
          </Col>
        </Row>

        <h3>Disabled Buttons</h3>
        <Button disabled style={defaultPrimaryButtonStyle}>Download Referral</Button>
        <Button disabled style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, borderColor: flatColor.greenPrimary.hex}}>Create Patient</Button>
        <Button disabled style={{...defaultPrimaryButtonStyle, backgroundColor: flatColor.bluePrimary.hex, borderColor: flatColor.bluePrimary.hex}}>View Patient</Button>
        <Button disabled style={ {...defaultSecondaryButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>
          <FaFileText size={20} color={flatColor.orangePrimary.hex} style={{ marginRight: '8px' }}/>
          Create Referral
        </Button>
        <Button disabled style={{...defaultSecondaryButtonStyle, backgroundColor: flatColor.whitePrimary.hex, borderColor: flatColor.grayPrimary.hex}}>Cancel</Button>

        <h1>Small buttons</h1>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.orangePrimary.hex, color: flatColor.orangePrimary.hex }}>Add</Button>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.bluePrimary.hex, color: flatColor.bluePrimary.hex }}>Expand</Button>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.yellowPrimary.hex, color: flatColor.yellowPrimary.hex }}>Close</Button>
        <Button style={ {...defaultSmallButtonStyle, borderColor: flatColor.greenPrimary.hex, color: flatColor.greenPrimary.hex }}>Remove</Button>

        <h1>Toggle button groups</h1>
        TO DO

      </div>
    )
  }
}
