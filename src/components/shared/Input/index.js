import React from 'react';
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
  disabled=false,
  initialValue,
  onBlur,
  customStyle,
  value
}) =>  (
  <StyledInput 
    type={type}
    name={name}
    style={customStyle}
    disabled={disabled}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    initialValue={initialValue}
  />
);

export default Input;
