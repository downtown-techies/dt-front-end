import * as React from 'react';
import { StyledButton } from './styles';

const Button = ({
  type,
  buttonStyle,
  handleClick,
  backgroundColor, 
  color, 
  isDisabled,
  children,
  className,
  ...rest
}) => (
  <StyledButton
    className={className}
    type={type}
    buttonStyle={buttonStyle}
    backgroundColor={backgroundColor}
    color={color}
    onClick={handleClick}
    disabled={isDisabled}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default Button;

