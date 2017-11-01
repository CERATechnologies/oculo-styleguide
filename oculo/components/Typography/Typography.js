import React, { Component } from 'react'
import { Row, Panel } from 'react-bootstrap'
import { fontSizeStyle } from './../../common'

export default class extends Component {
  static styleguide = {
    index: '7.1',
    category: 'Typography',
    title: 'Typography',
    description:
`
* Primary Font Family* : \`${fontSizeStyle.fontFamilyPrimary}\`
* Secondary Font Family* : \`${fontSizeStyle.fontFamilySecondary}\`
* Font Weight* : \`${fontSizeStyle.fontWeight}\`
* Line Height* : \`${fontSizeStyle.bodyLineHeight}\`
`,
    code: `

    `
  }

  render () {
    const {
      fontFamilyPrimary, fontWeight,
      h1fontSize, h2fontSize, h3fontSize, h4fontSize, h5fontSize,
      bodyFontSize, bodyLineHeight
     } = fontSizeStyle

    return (
      <div>
        <Panel header="Headers fonts" bsStyle="info">
          <div style={ {fontFamily: fontFamilyPrimary} }>
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
          <div style={ {fontFamily: fontFamilyPrimary, fontSize: bodyFontSize, lineHeight: bodyLineHeight} }>
            <p>lighter : <div style={ {fontWeight: 'lighter' } }>{fontSizeStyle.shortText}</div></p>
            <p>normal : <div style={ {fontWeight: 'normal' } }>{fontSizeStyle.shortText}</div></p>
            <p>bold : <div style={ {fontWeight: 'bold' } }>{fontSizeStyle.shortText}</div></p>
          </div>

          <h3>Long text</h3>
          <div style={ {fontFamily: fontFamilyPrimary, fontSize: bodyFontSize, lineHeight: bodyLineHeight} }>
            <p>lighter : <div style={ {fontWeight: 'lighter' } }>{fontSizeStyle.longText}</div></p>
            <p>normal : <div style={ {fontWeight: 'normal' } }>{fontSizeStyle.longText}</div></p>
            <p>bold : <div style={ {fontWeight: 'bold' } }>{fontSizeStyle.longText}</div></p>
          </div>
        </Panel>

      </div>
    )
  }
}
