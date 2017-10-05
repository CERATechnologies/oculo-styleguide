import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

const propTypes = {
  buttonLabel: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

const defaultProps = {
  buttonLabel: 'Referral'
};

const style = {
  border: '2px solid',
  borderColor: '#d86048',
  color: '#d86048',
  padding: '5px 11px',
  backgroundColor: 'white',
}

export default class OculoButton extends Component {
  static styleguide = {
    index: '1.2',
    category: 'OculoButton',
    title: 'OculoButton',
    description: 'OculoButton example',
  }

  render () {
    return (
        <Button style={style} onClick={this.props.onClick}>
          {this.props.buttonLabel}
        </Button>
    )
  }
}

OculoButton.propTypes = propTypes;
OculoButton.defaultProps = defaultProps;
