import React from 'react';
import { StyledLink } from './styles';

const Link = ({
  address, 
  name, 
  linkStyle,
  color,
  text, 
  target = '_blank', 
  children
}) => {
  const LinkText = text || children || address;

  return (
    <StyledLink href={address}
       color={color}
       linkStyle={linkStyle}
       name={name}
       target={target}
    >
      {LinkText}
    </StyledLink>
  )
}

export default Link;
