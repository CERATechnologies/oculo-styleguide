import React, { Component } from 'react'

export default class extends Component {
  static styleguide = {
    index: '6.1',
    category: 'Enter Category in camel case',
    title: 'Enter title',
    description: 'Enter a description',
    code: `
    Enter text
    `
  }

  render () {
    return (
      <div>
        Helo !
      </div>
    )
  }
}
