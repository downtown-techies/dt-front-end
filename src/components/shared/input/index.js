import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../../../theme';

export const StyledInput = styled.input`
  border: 1px solid
    ${props =>
      props.hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: 0.5rem;
  width: 100%;
  height: 5rem;
  padding: 1.2rem 1rem;
  font-size: 1.6rem;
  background-color: #fff;
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
