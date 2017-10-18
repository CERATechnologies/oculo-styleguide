import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

const style = {
  fontFamily: 'Helvetica Neue',
  fontWeight: '200',
  h1fontSize: '44px',
  h2fontSize: '30px',
  h3fontSize: '24px',
  h4fontSize: '18px',
  h5fontSize: '14px',
}

export default class extends Component {
  static styleguide = {
    index: '7.1',
    category: 'Typography',
    title: 'Typography',
    description: 'Typography used by Oculo',
    code: `
Font Family : Helvetica Neue
Font Weight : 200
    `
  }

  render () {
    const {
      fontFamily, fontWeight,
      h1fontSize, h2fontSize, h3fontSize, h4fontSize, h5fontSize,
     } = style

    return (
      <div style={ {fontFamily, fontWeight} }>
        <Row>
          <h1 style={ { fontSize: h1fontSize  } }>Header 1</h1>
          <p>font-size: {h1fontSize}</p>
        </Row>
        <Row>
          <h2 style={ { fontSize: h2fontSize  } }>Header 2</h2>
          <p>font-size: {h2fontSize}</p>
        </Row>
        <Row>
          <h3 style={ { fontSize: h3fontSize  } }>Header 3</h3>
          <p>font-size: {h3fontSize}</p>
        </Row>
        <Row>
          <h4 style={ { fontSize: h4fontSize  } }>Header 4</h4>
          <p>font-size: {h4fontSize}</p>
        </Row>
        <Row>
          <h5 style={ { fontSize: h5fontSize  } }>Header 5</h5>
          <p>font-size: {h5fontSize}</p>
        </Row>
      </div>
    )
  }
}
