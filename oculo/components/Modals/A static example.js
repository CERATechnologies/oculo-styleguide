import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

// .modal#error-integration {
//   .modal-header {
//     background-color: $oculo-orange;
//     border-top-left-radius: 5px;
//     border-top-right-radius: 5px;
//     color: $white;
//   }
// }

const modalCSS = {
  header: {
    backgroundColour
  }
}

export default class extends Component {
  static styleguide = {
    index: '4.1',
    category: 'Modals',
    title: 'A static example',
    description: `
A rendered modal with header, body, and set of actions in the footer.

The header is added automatically if you pass in a \`title\` prop. \n
\n
*[placholder]* : \`placeholder\` \n
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

  render () {
    return (
      <div className='static-modal'>
        <Modal.Dialog onHide={() => {}}>
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
      </div>
    )
  }
}
