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
  titleStyle: { ...modalStyle.headerTitleDefault, color: flatColor.grayPrimary.hex },
  titleContent: 'Search for a patient',
  bodyContent: fontSizeStyle.shortText,
  defaultPrimaryButtonStyle: { ...defaultPrimaryButtonStyle, backgroundColor: flatColor.bluePrimary.hex, color: flatColor.grayPrimary.hex },
  defaultSecondaryButtonStyle
}

const example3 = {
  headerStyle: { ...modalStyle.headerDefault, backgroundColor: flatColor.yellowPrimary.hex },
  titleStyle: { ...modalStyle.headerTitleDefault, color: flatColor.grayPrimary.hex },
  titleContent: 'Complete the form',
  bodyContent: fontSizeStyle.longText,
  defaultPrimaryButtonStyle: { ...defaultPrimaryButtonStyle, backgroundColor: flatColor.yellowPrimary.hex, color: flatColor.grayPrimary.hex },
  defaultSecondaryButtonStyle
}

const example4 = {
  headerStyle: { ...modalStyle.headerDefault, backgroundColor: flatColor.greenPrimary.hex },
  titleStyle: { ...modalStyle.headerTitleDefault, color: flatColor.grayPrimary.hex },
  titleContent: 'Add a new provider',
  bodyContent: fontSizeStyle.longText,
  defaultPrimaryButtonStyle: { ...defaultPrimaryButtonStyle, backgroundColor: flatColor.greenPrimary.hex, color: flatColor.grayPrimary.hex },
  defaultSecondaryButtonStyle
}

const examples = [example1, example2, example3, example4]

export default class extends Component {
  static styleguide = {
    index: '4.1',
    category: 'Modals',
    title: 'A static example',
    description: `
A rendered modal with header, body, and set of actions in the footer.

The header is added automatically if you pass in a \`title\` prop. \n
\n
*border radius* : \`placeholder\` \n

No crosses on the top right at all

Explicity way to get out is the close button, implicit way is to click outside of the modal

Modal title should be telling what the user is doing : \n
\`Good example\` : "Search for a provider \n
\`Bad example\` : "Search" \n
Always start with a verb
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

  renderModals = (example) => {
    const { headerStyle, titleStyle, titleContent, bodyContent, defaultPrimaryButtonStyle, defaultSecondaryButtonStyle } = example

    return(
      <Modal.Dialog>
        <Modal.Header style={ headerStyle }>
          <Modal.Title style={ titleStyle }>{titleContent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{bodyContent}</Modal.Body>
        <Modal.Footer>
          <Button style={ defaultSecondaryButtonStyle }>Close</Button>
          <Button style={ defaultPrimaryButtonStyle }>Save</Button>
        </Modal.Footer>
      </Modal.Dialog>

    )
  }


  render () {
    return (
      <div className='static-modal'>

        { examples.map((example) => this.renderModals(example)) }
      </div>
    )
  }
}
