import React, { Component } from 'react'
import { Row, Col, Panel } from 'react-bootstrap'

const flatColor = {
  orangeTint3: { name: 'Melon', hex: '#f5b2a7' },
  orangeTint2: { name: 'Dark Salmon', hex: '#f19484' },
  orangeTint1: { name: 'Terra Cotta', hex: '#ed7561' },
  orangePrimary: { name: 'Carmine Pink', hex: '#ea573e' },
  orangeShade1: { name: 'Golden Gate Bridge', hex: '#c04833' },
  orangeShade2: { name: 'Burnt Umber', hex: '#953828' },
  orangeShade3: { name: 'Liver', hex: '#6b281d' },
  blueTint3: { name: 'Azureish white', hex: '#cce7f9' },
  blueTint2: { name: 'Powder Blue', hex: '#b8ddf7' },
  blueTint1: { name: 'Non-photo blue', hex: '#a4d4f5' },
  bluePrimary: { name: 'Light Cornflower Blue', hex: '#90cbf3' },
  blueShade1: { name: 'Moonstone Blue', hex: '#76a7c7' },
  blueShade2: { name: 'Rackley', hex: '#5c829b' },
  blueShade3: { name: 'Deep Space Sparkle', hex: '#425d6f' },
  greenTint3: { name: 'Nyanza', hex: '#e1f4d8' },
  greenTint2: { name: 'Tea Green', hex: '#d5f039' },
  greenTint1: { name: 'Tea Green', hex: '#c9ecba' },
  greenPrimary: { name: 'Light Moss Green', hex: '#bee8ab' },
  greenShade1: { name: 'Dark Sea Green', hex: '#9cbe8c' },
  greenShade2: { name: 'Camouflage Green', hex: '#79946d' },
  greenShade3: { name: 'Ebony', hex: '#576a4e' },
  yellowTint3: { name: 'Blanced Almond', hex: '#fcefcb' },
  yellowTint2: { name: 'Banana Mania', hex: '#fbe9b6' },
  yellowTint1: { name: 'Peach-Yellow', hex: '#fae3a1' },
  yellowPrimary: { name: 'Flavescent', hex: '#f9dd8d' },
  yellowShade1: { name: 'Misty Moss', hex: '#ccb574' },
  yellowShade2: { name: 'Chamoisee', hex: '#9f8d5a' },
  yellowShade3: { name: 'Raw Umber', hex: '#726541' },
  grayTint3: { name: 'Silver Chalice', hex: '#a9acb1' },
  grayTint2: { name: 'Roman Silver', hex: '#878b92' },
  grayTint1: { name: 'Dim Gray', hex: '#656a73' },
  grayPrimary: { name: 'Outer Space', hex: '#434a54' },
  grayShade1: { name: 'Arsenic', hex: '#373d45' },
  grayShade2: { name: 'Gunmetal', hex: '#2b3036' },
  grayShade3: { name: 'Dark Gunmetal', hex: '#1f2227' },
  whiteTint2: { name: 'White Smoke', hex: '#f6f6f6' },
  whiteTint1: { name: 'White Smoke', hex: '#f4f4f4' },
  whitePrimary: { name: 'Anti-Flash White', hex: '#f2f2f2' },
  whiteShade1: { name: 'Lavender Gray', hex: '#c7c7c7' },
  whiteShade2: { name: 'Spanish Gray', hex: '#9b9b9b' },
}

const height = '100px'
const border = 'solid 1px'

export default class extends Component {
  static styleguide = {
    index: '6.1',
    category: 'Color Guide',
    title: 'Color Guide',
    description: 'Colors used ...',
    code: ` `
  }

  render () {
    return (
      <div>
        <h1>Core pallete</h1>

        <h2>Primary colors</h2>
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

        <h2>Tint</h2>
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

        <h2>Shade</h2>
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
      </div>
    )
  }
}
