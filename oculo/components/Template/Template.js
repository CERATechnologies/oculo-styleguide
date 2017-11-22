import React, { Component } from 'react'

export default class extends Component {
  static styleguide = {
    index: '999.1',
    category: 'Template',
    title: 'Enter title',
    description: 'Enter a description',
    code: `
    Enter text
    `
  }

  render () {
    return (
      <div>
        This is a template for new components
      </div>
    )
  }
}
