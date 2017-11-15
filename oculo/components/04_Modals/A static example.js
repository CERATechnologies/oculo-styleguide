import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { flatColor,
         defaultPrimaryButtonStyle,
         modalStyle,
         fontSizeStyle,
         defaultSecondaryButtonStyle } from './../../common'

const example1 = {
  headerStyle: modalStyle.headerDefault,
  titleStyle: modalStyle.headerTitleDefault,
  titleContent: 'Do something after reading the text',
  bodyContent: fontSizeStyle.longText,
  defaultPrimaryButtonStyle,
  defaultSecondaryButtonStyle
}

const example2 = {
  headerStyle: { ...modalStyle.headerDefault, backgroundColor: flatColor.bluePrimary.hex },
  titleStyle: modalStyle.headerTitleDefault,
  titleContent: 'Search for a patient',
  bodyContent: fontSizeStyle.shortText,
  defaultPrimaryButtonStyle: { ...defaultPrimaryButtonStyle, backgroundColor: flatColor.bluePrimary.hex, borderColor: flatColor.bluePrimary.hex },
  defaultSecondaryButtonStyle
}

const example3 = {
  headerStyle: { ...modalStyle.headerDefault, backgroundColor: flatColor.yellowPrimary.hex },
  titleStyle: modalStyle.headerTitleDefault,
  titleContent: 'Complete the form',
  bodyContent: fontSizeStyle.longText,
  defaultPrimaryButtonStyle: { ...defaultPrimaryButtonStyle, backgroundColor: flatColor.yellowPrimary.hex, borderColor: flatColor.yellowPrimary.hex },
  defaultSecondaryButtonStyle
}

const example4 = {
  headerStyle: { ...modalStyle.headerDefault, backgroundColor: flatColor.greenPrimary.hex },
  titleStyle: modalStyle.headerTitleDefault,
  titleContent: 'Add a new provider',
  bodyContent: fontSizeStyle.longText,
  defaultPrimaryButtonStyle: { ...defaultPrimaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, borderColor: flatColor.greenPrimary.hex },
  defaultSecondaryButtonStyle
}

const examples = [example1, example2, example3, example4]

export default class extends Component {
  static styleguide = {
    index: '4.1',
    category: 'Modals',
    title: 'A static example for modals',
    description: `
* A rendered modal with 3 sections : header, body, and set of actions in the footer.
* Allow only 2 ways to exit the modal, close button or click outside the modal
* No crosses on the top right to close the modal
* Always start modal header title with a verb.  \`Good example\` : "Search for a provider".  \`Bad example\` : "Provider listing"
* Primary \`call to action\` button is always on the left
* Secondary button is always on the right
* Modal title should be telling what the user is doing :

`,
    code: `
<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    One fine body...
  </Modal.Body>
  <Modal.Footer>
    <Button>Close</Button>
    <Button bsStyle="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
    `
  }

  renderModals = (example, index) => {
    const { headerStyle, titleStyle, titleContent, bodyContent, defaultPrimaryButtonStyle, defaultSecondaryButtonStyle } = example

    return(
      <Modal.Dialog key={index}>
        <Modal.Header style={ headerStyle }>
          <Modal.Title style={ titleStyle }>{titleContent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{bodyContent}</Modal.Body>
        <Modal.Footer>
          <Button style={ defaultPrimaryButtonStyle }>Save</Button>
          <Button style={ defaultSecondaryButtonStyle }>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>

    )
  }

  render () {
    return (
      <div className='static-modal'>

        { examples.forEach((example, index) => this.renderModals(example, index)) }
      </div>
    )
  }
}
