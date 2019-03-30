import * as React from 'react';
import { StyledButton } from './styles';

const Button = ({
  type,
  buttonStyle,
  handleClick,
  isDisabled,
  children,
  className,
  ...rest
}) => (
  <StyledButton
    className={className}
    type={type}
    buttonStyle={buttonStyle}
    onClick={handleClick}
    disabled={isDisabled}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default Button;

