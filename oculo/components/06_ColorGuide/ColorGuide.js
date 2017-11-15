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

Positive (CTA: Save, Send, Download): Blue, Green;
Negative (CTA: Delete, Block, Reset): Red;
Neutral (CTA: See more, Alternatives, Discover): Black;
Disable: Grey;
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
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.orangeTint1.hex, height, border} }>
            <i>{`${flatColor.orangeTint1.name} - ${flatColor.orangeTint1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.blueTint1.hex, height, border} }>
            <i>{`${flatColor.blueTint1.name} - ${flatColor.blueTint1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.greenTint1.hex, height, border} }>
            <i>{`${flatColor.greenTint1.name} - ${flatColor.greenTint1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.yellowTint1.hex, height, border} }>
            <i>{`${flatColor.yellowTint1.name} - ${flatColor.yellowTint1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.grayTint1.hex, height, border} }>
            <i>{`${flatColor.grayTint1.name} - ${flatColor.grayTint1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.whiteTint1.hex, height, border} }>
            <i>{`${flatColor.whiteTint1.name} - ${flatColor.whiteTint1.hex}`}</i>
          </Col>
        </Row>

        <h3>Shade</h3>
        <Row style= { { color: 'white'}}>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.orangeShade1.hex, height, border} }>
            <i>{`${flatColor.orangeShade1.name} - ${flatColor.orangeShade1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.blueShade1.hex, height, border} }>
            <i>{`${flatColor.blueShade1.name} - ${flatColor.blueShade1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.greenShade1.hex, height, border} }>
            <i>{`${flatColor.greenShade1.name} - ${flatColor.greenShade1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.yellowShade1.hex, height, border} }>
            <i>{`${flatColor.yellowShade1.name} - ${flatColor.yellowShade1.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.grayShade1.hex, height, border} }>
            <i>{`${flatColor.grayShade1.name} - ${flatColor.grayPrimary.hex}`}</i>
          </Col>
          <Col xs={2} md={2} style={ { backgroundColor: flatColor.whiteShade1.hex, height, border} }>
            <i>{`${flatColor.whiteShade1.name} - ${flatColor.whiteShade1.hex}`}</i>
          </Col>
        </Row>
      </div>
    )
  }
}
