import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default class Spinner extends Component {
  static styleguide = {
    index: '5.2',
    category: 'Spinner',
    title: 'Spinner',
    description: 'Spinner for page transitions.',
    code: `<Spinner />`
  }

  render () {
    return (
      <div className="spinner" style={{ color: this.props.color || '#d86048', fontSize: this.props.size || '50px' }} />
    )
  }
}

Spinner.propTypes = propTypes;
