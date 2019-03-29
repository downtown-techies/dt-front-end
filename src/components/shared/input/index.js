import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../../../theme';

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'black'};
  background: white;
  border: 1px solid black;
  border-radius: 3px;
`;

class Input extends Component {
  render() {
    return (
      <StyledInput />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
}

export default Input;
