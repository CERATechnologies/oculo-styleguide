import React, { Component } from 'react'
import { Row, Panel } from 'react-bootstrap'

const style = {
  fontFamily: 'Helvetica Neue',
  fontWeight: '200',
  bodyLineHeight: '20px',
  bodyFontSize : '14px',
  h1fontSize: '44px',
  h2fontSize: '30px',
  h3fontSize: '24px',
  h4fontSize: '18px',
  h5fontSize: '14px',
  shortText : 'The quick brown fox jumps over the wall',
  longText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export default class extends Component {
  static styleguide = {
    index: '7.1',
    category: 'Typography',
    title: 'Typography',
    description:
`
Typography used by Oculo \n
*Primary Font Family* : \`${style.fontFamily}\` \n
*Secondary Font Family* : \`Helvetica\` \n
*Font Weight* : \`${style.fontWeight}\` \n
*Line Height* : \`${style.bodyLineHeight}\` \n
`,
    code: `

    `
  }

  render () {
    const {
      fontFamily, fontWeight,
      h1fontSize, h2fontSize, h3fontSize, h4fontSize, h5fontSize,
      bodyFontSize, bodyLineHeight
     } = style

    return (
      <div>
        <Panel header="Headers fonts" bsStyle="info">
          <div style={ {fontFamily} }>
            <Row>
              <h1 style={ { fontSize: h1fontSize, fontWeight  } }>Header 1</h1>
              <p>font-size: {h1fontSize}</p>
            </Row>
            <Row>
              <h2 style={ { fontSize: h2fontSize, fontWeight  } }>Header 2</h2>
              <p>font-size: {h2fontSize}</p>
            </Row>
            <Row>
              <h3 style={ { fontSize: h3fontSize, fontWeight  } }>Header 3</h3>
              <p>font-size: {h3fontSize}</p>
            </Row>
            <Row>
              <h4 style={ { fontSize: h4fontSize, fontWeight  } }>Header 4</h4>
              <p>font-size: {h4fontSize}</p>
            </Row>
            <Row>
              <h5 style={ { fontSize: h5fontSize, fontWeight  } }>Header 5</h5>
              <p>font-size: {h5fontSize}</p>
            </Row>
          </div>
        </Panel>

        <br />

        <Panel header="Body fonts" bsStyle="info">
          <h3>Short text</h3>
          <div style={ {fontFamily, fontSize: bodyFontSize, lineHeight: bodyLineHeight} }>
            <p>lighter : <div style={ {fontWeight: 'lighter' } }>{style.shortText}</div></p>
            <p>normal : <div style={ {fontWeight: 'normal' } }>{style.shortText}</div></p>
            <p>bold : <div style={ {fontWeight: 'bold' } }>{style.shortText}</div></p>
          </div>

          <h3>Long text</h3>
          <div style={ {fontFamily, fontSize: bodyFontSize, lineHeight: bodyLineHeight} }>
            <p>lighter : <div style={ {fontWeight: 'lighter' } }>{style.longText}</div></p>
            <p>normal : <div style={ {fontWeight: 'normal' } }>{style.longText}</div></p>
            <p>bold : <div style={ {fontWeight: 'bold' } }>{style.longText}</div></p>
          </div>
        </Panel>

      </div>
    )
  }
}
