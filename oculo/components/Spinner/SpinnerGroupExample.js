import React, { Component } from 'react'
import Spinner from './Spinner'

export default class extends Component {
  static styleguide = {
    index: '5.1',
    category: 'Spinner',
    title: 'Spinner',
    description: 'All Spinners demo for page transitions. You can customise this spinner by its `size` and `color` prop',
    code: `
<Spinner color={'#d86048'} size={'100px'}/>
<Spinner color={'#bee8ab'} size={'100px'}/>
<Spinner color={'#90cbf3'} size={'100px'}/>
<Spinner color={'#f9dd8d'} size={'100px'}/>
    `
  }

  render () {
    return (
      <div>
        <Spinner color={'#d86048'} size={'100px'}/>
        <Spinner color={'#bee8ab'} size={'100px'}/>
        <Spinner color={'#90cbf3'} size={'100px'}/>
        <Spinner color={'#f9dd8d'} size={'100px'}/>
      </div>
    )
  }
}
