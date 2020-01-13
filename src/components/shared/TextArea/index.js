import React from 'react';
import styled from '../../../theme';

export const StyledTextArea = styled.textarea`
  border: 1px solid
    ${props =>
      props.hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: 0.5rem;
  width: 100%;
  height: 12rem;
  padding: 1.2rem 1rem;
  font-size: 1.3rem;
  background-color: #fff;
  word-wrap: break-word;
`;

const TextArea = ({
  type,
  name,
  onChange,
  onBlur,
  value,
  wrap='soft'
}) =>  (
  <StyledTextArea 
    type={type}
    wrap={wrap}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);

export default TextArea;
