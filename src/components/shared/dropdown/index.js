import React, { Component } from 'react';
import { StyledDropdown } from './styles';

const Dropdown = ({
  type,
  dropdownStyle,
  handleClick,
  isDisabled,
  children,
  className,
  ...rest
}) => (
  <StyledDropdown
    className={className}
    type={type}
    dropdownStyle={dropdownStyle}
    onClick={handleClick}
    disabled={isDisabled}
    {...rest}
  >
    {children}
  </StyledDropdown>
);

export default Dropdown;


