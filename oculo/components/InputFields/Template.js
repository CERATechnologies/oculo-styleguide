import React, { Component } from 'react'
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap'
import { FaSearch } from 'react-icons/lib/fa'

const style = {
  backgroundColor: '#bee8ab',
  color: '#f2f2f2',
}

export default class extends Component {
  static styleguide = {
    index: '8.1',
    category: 'Input Field',
    title: 'Input with Button',
    description: 'Enter a description',
    code: `
    Enter text
    `
  }

  render () {
    return (
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder="DD/MM/YYYY"/>
          <InputGroup.Addon style={style}>
            <div style={ {display: 'inline-block'}} >
              <FaSearch /> Search
            </div>
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    )
  }
}
