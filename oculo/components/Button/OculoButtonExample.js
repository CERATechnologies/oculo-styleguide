import React, { Component } from 'react'
import OculoButton from './OculoButton'
import { ButtonGroup } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '1.1',
    category: 'OculoButton',
    title: 'OculoButton',
    description: 'Oculo Button examples',
    code: `
        <OculoButton buttonLabel={'YOLO'} color={'#90cbf3'}/>
    `
  }

  render () {
    return (
      <div>
        <OculoButton buttonLabel={'Button 1'} color={'#90cbf3'} onClick={() => console.log('Button 1')}/>
        <OculoButton buttonLabel={'Button 2'} color={'#90cbf3'}/>
        <OculoButton buttonLabel={'Button 3'} color={'#90cbf3'}/>
      </div>
    )
  }
}
