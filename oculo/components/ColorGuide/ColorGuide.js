import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

const colors = {
  orange1: '#ea573e',
  orange2: '#d86048',
  orange3: '#dc7660',
  orange4: '#e9673e',
  orange5: '#e65844',
  orange6: '#e7573d',
  orange7: '#d43f3a',
  orange8: '#d9534f',
  green1: '#bee8ab',
  green2: '#54821d',
  green3: '#7cc148',
  blue1: '#55bfe0',
  blue2: '#90cbf3',
  blue3: '#57b6dd',
  blue4: '#5ec5e6',
  blue5: '#46b8da',
  blue6: '#5bc0de',
  blue7: '#46b8da',
  blue8: '#25a9e0',
  yellow1: '#f9dd8d',
  dark1: '#000000',
  dark2: '#222222',
  dark3: '#245959',
  dark4: '#263333',
  dark5: '#434a54',
  dark6: '#e6e6e6',
  dark7: '#404040',
  dark8: '#8c8c8c',
  white1: '#ffffff',
  white2: '#f2f2f2',
}

const height = '50px'

export default class extends Component {
  static styleguide = {
    index: '6.1',
    category: 'ColorGuide',
    title: 'Color Guide',
    description: 'Colors used',
    code: `
    Current colours used by Oculo as of 10 Oct 2017
    Official colours are used on the sales and app site
    Unofficial colours are used in the investor deck and marketing/promotional documents
    `
  }

  render () {
    return (
      <div>
        <h1> Consolidated colours (Work in progress) </h1>
        <h2> Primary colors </h2>
        <Row style={ { backgroundColor: colors.orange1, height, border: 'solid 1px'  } }><h2>{colors.orange1} Orange </h2></Row>
        <Row style={ { backgroundColor: colors.white1, height, border: 'solid 1px'  } }><h2>{colors.white1} White </h2></Row>
        <Row style={ { backgroundColor: colors.dark1, height, border: 'solid 1px'  } }><h2>{colors.dark1} Black </h2></Row>

        <h2> Secondary colors </h2>
        <Row style={ { backgroundColor: colors.green1, height, border: 'solid 1px'  } }><h2>{colors.green1} Green </h2></Row>
        <Row style={ { backgroundColor: colors.blue2, height, border: 'solid 1px'  } }><h2>{colors.blue2} Blue </h2></Row>
        <Row style={ { backgroundColor: colors.yellow1, height, border: 'solid 1px'  } }><h2>{colors.yellow1} Yellow </h2></Row>

        <h2>Black shades</h2>
        <Row style={ { backgroundColor: colors.dark2, height, border: 'solid 1px'  } }><h2>{colors.dark2} Black shade 1 </h2></Row>
        <Row style={ { backgroundColor: colors.dark5, height, border: 'solid 1px'  } }><h2>{colors.dark5} Black shade 2 </h2></Row>
        <Row style={ { backgroundColor: colors.dark8, height, border: 'solid 1px'  } }><h2>{colors.dark8} Black shade 3 </h2></Row>

        <br />

        <h1> Official colours </h1>
        <Row style={ { backgroundColor: colors.orange1, height, border: 'solid 1px' } }><h2>{colors.orange1} Primary orange</h2></Row>
        <Row style={ { backgroundColor: colors.orange5, height, border: 'solid 1px' } }><h2>{colors.orange5} Zendesk</h2></Row>
        <Row style={ { backgroundColor: colors.orange4, height, border: 'solid 1px' } }><h2>{colors.orange4} Table pagination</h2></Row>
        <Row style={ { backgroundColor: colors.orange5, height, border: 'solid 1px' } }><h2>{colors.orange5} Address Book Oculo Member border</h2></Row>
        <Row style={ { backgroundColor: colors.orange7, height, border: 'solid 1px' } }><h2>{colors.orange7} Manage My Practice - User - Remove Button BG Color</h2></Row>
        <Row style={ { backgroundColor: colors.orange8, height, border: 'solid 1px' } }><h2>{colors.orange8} Manage My Practice - User - Remove Button BG Border</h2></Row>

        <Row style={ { backgroundColor: colors.green2, height, border: 'solid 1px' } }><h2>{colors.green2} My referral page - tab indicator</h2></Row>
        <Row style={ { backgroundColor: colors.green3, height, border: 'solid 1px' } }><h2>{colors.green3} Address Book - Create New Button</h2></Row>

        <Row style={ { backgroundColor: colors.blue1, height, border: 'solid 1px' } }><h2>{colors.blue1} Oculo Sales site</h2></Row>
        <Row style={ { backgroundColor: colors.blue3, height, border: 'solid 1px' } }><h2>{colors.blue3} Address Book - Primary Banner</h2></Row>
        <Row style={ { backgroundColor: colors.blue4, height, border: 'solid 1px' } }><h2>{colors.blue4} Patient Page - Tab indicator</h2></Row>
        <Row style={ { backgroundColor: colors.blue5, height, border: 'solid 1px' } }><h2>{colors.blue5} Patient Page - View Patient Button BG</h2></Row>
        <Row style={ { backgroundColor: colors.blue6, height, border: 'solid 1px' } }><h2>{colors.blue6} Patient Page -  View Patient Button Border</h2></Row>
        <Row style={ { backgroundColor: colors.blue7, height, border: 'solid 1px' } }><h2>{colors.blue7} Address Book - View Profile link button</h2></Row>

        <Row style={ { backgroundColor: colors.white1, height, border: 'solid 1px' } }><h2>{colors.white1}</h2></Row>
        <Row style={ { backgroundColor: colors.white2, height, border: 'solid 1px' } }><h2>{colors.white2}</h2></Row>

        <Row style={ { backgroundColor: colors.dark1, height, border: 'solid 1px' } }><h2>{colors.dark1}</h2></Row>
        <Row style={ { backgroundColor: colors.dark2, height, border: 'solid 1px' } }><h2>{colors.dark2}</h2></Row>
        <Row style={ { backgroundColor: colors.dark3, height, border: 'solid 1px' } }><h2>{colors.dark3}</h2></Row>
        <Row style={ { backgroundColor: colors.dark4, height, border: 'solid 1px' } }><h2>{colors.dark4}</h2></Row>
        <Row style={ { backgroundColor: colors.dark5, height, border: 'solid 1px' } }><h2>{colors.dark5}</h2></Row>
        <Row style={ { backgroundColor: colors.dark6, height, border: 'solid 1px' } }><h2>{colors.dark6} Patient Page - Sent by</h2></Row>
        <Row style={ { backgroundColor: colors.dark7, height, border: 'solid 1px' } }><h2>{colors.dark7} Address Book Search Modal - Close button, AddressBook Secondary Banner</h2></Row>
        <Row style={ { backgroundColor: colors.dark8, height, border: 'solid 1px' } }><h2>{colors.dark8} User name</h2></Row>

        <br />

        <h1> Unofficial colours </h1>
        <Row style={ { backgroundColor: colors.orange2, height, border: 'solid 1px'  } }><h2>{colors.orange2}</h2></Row>
        <Row style={ { backgroundColor: colors.green1, height, border: 'solid 1px'  } }><h2>{colors.green1}</h2></Row>
        <Row style={ { backgroundColor: colors.blue2, height, border: 'solid 1px'  } }><h2>{colors.blue2}</h2></Row>
        <Row style={ { backgroundColor: colors.yellow1, height, border: 'solid 1px'  } }><h2>{colors.yellow1}</h2></Row>
      </div>
    )
  }
}
