import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../../../theme';

export const StyledInput = styled.input`
  border: 1px solid
    ${props =>
      props.hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: 0.5rem;
  width: 100%;
  height: 3rem;
  padding: 1.2rem 1rem;
  font-size: 1.3rem;
  background-color: #fff;
`;

const Input = ({
  type,
  name,
  onChange,
  onBlur,
  value
}) =>  (
  <StyledInput 
    type={type}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);

export default Input;
