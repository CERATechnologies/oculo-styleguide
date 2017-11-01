import React, { Component } from 'react'
import { Row, Col, Panel } from 'react-bootstrap'
import { flatColor, fontSizeStyle } from './../../common'


const height = '100px'
const border = 'solid 1px'

export default class extends Component {
  static styleguide = {
    index: '6.1',
    category: 'Color Guide',
    title: 'Color Guide',
    description:
`
Contrast guide
`
,
    code: ` `
  }

  render () {
    const { fontFamilyPrimary, fontWeight, bodyFontSize, bodyLineHeight } = fontSizeStyle
    return (
      <div>
        <h1>Core pallete</h1>

        <h3>Primary colors</h3>
        <Row>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.orangePrimary.hex, height, border} }>
            <i>{`${flatColor.orangePrimary.name} - ${flatColor.orangePrimary.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.bluePrimary.hex, height, border} }>
            <i>{`${flatColor.bluePrimary.name} - ${flatColor.bluePrimary.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.greenPrimary.hex, height, border} }>
            <i>{`${flatColor.greenPrimary.name} - ${flatColor.greenPrimary.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.yellowPrimary.hex, height, border} }>
            <i>{`${flatColor.yellowPrimary.name} - ${flatColor.yellowPrimary.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.grayPrimary.hex, height, border, color: 'white'} }>
            <i>{`${flatColor.grayPrimary.name} - ${flatColor.grayPrimary.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.whitePrimary.hex, height, border} }>
            <i>{`${flatColor.whitePrimary.name} - ${flatColor.whitePrimary.hex}`}</i>
          </Col>
        </Row>

        <h3>Tint</h3>
        <Row>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.orangeTint3.hex, height, border} }>
            <i>{`${flatColor.orangeTint3.name} - ${flatColor.orangeTint3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.blueTint3.hex, height, border} }>
            <i>{`${flatColor.blueTint3.name} - ${flatColor.blueTint3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.greenTint3.hex, height, border} }>
            <i>{`${flatColor.greenTint3.name} - ${flatColor.greenTint3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.yellowTint3.hex, height, border} }>
            <i>{`${flatColor.yellowTint3.name} - ${flatColor.yellowTint3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.grayTint3.hex, height, border} }>
            <i>{`${flatColor.grayTint3.name} - ${flatColor.grayTint1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.whiteTint1.hex, height, border} }>
            <i>{`${flatColor.whiteTint1.name} - ${flatColor.whiteTint1.hex}`}</i>
          </Col>
        </Row>

        <h3>Shade</h3>
        <Row style= { { color: 'white'}}>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.orangeShade3.hex, height, border} }>
            <i>{`${flatColor.orangeShade3.name} - ${flatColor.orangeShade3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.blueShade3.hex, height, border} }>
            <i>{`${flatColor.blueShade3.name} - ${flatColor.blueShade3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.greenShade3.hex, height, border} }>
            <i>{`${flatColor.greenShade3.name} - ${flatColor.greenShade3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.yellowShade3.hex, height, border} }>
            <i>{`${flatColor.yellowShade3.name} - ${flatColor.yellowShade3.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.grayShade3.hex, height, border} }>
            <i>{`${flatColor.grayShade1.name} - ${flatColor.grayPrimary.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.whiteShade1.hex, height, border} }>
            <i>{`${flatColor.whiteShade1.name} - ${flatColor.whiteShade1.hex}`}</i>
          </Col>
        </Row>

        <h1>Typography color contrast guide</h1>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.orangePrimary.hex, height, border} }>
            <div style={ { fontSize: bodyFontSize, fontWeight, fontFamily: fontFamilyPrimary, color: flatColor.whitePrimary.hex }}>
              <p> Background color : {flatColor.orangePrimary.hex}</p>
              <p> Font color : {flatColor.whitePrimary.hex}</p>
            </div>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.bluePrimary.hex, height, border} }>
            <div style={ { fontSize: bodyFontSize, fontWeight, fontFamily: fontFamilyPrimary  } }>
              <p> Background color : {flatColor.bluePrimary.hex}</p>
              <p> Font color : {flatColor.grayPrimary.hex}</p>
            </div>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.yellowPrimary.hex, height, border} }>
            <div style={ { fontSize: bodyFontSize, fontWeight, fontFamily: fontFamilyPrimary  } }>
              <p> Background color : {flatColor.yellowPrimary.hex}</p>
              <p> Font color : {flatColor.grayPrimary.hex}</p>
            </div>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.greenPrimary.hex, height, border} }>
            <div style={ { fontSize: bodyFontSize, fontWeight, fontFamily: fontFamilyPrimary  } }>
              <p> Background color : {flatColor.greenPrimary.hex}</p>
              <p> Font color : {flatColor.grayPrimary.hex}</p>
            </div>
          </Col>

      </div>
    )
  }
}
