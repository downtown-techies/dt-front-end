import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../../theme';

const StyledLink = styled.a`
`;

const Link = ({
  address, 
  name, 
  text, 
  target = '_blank', 
  children
}) => {
  const LinkText = text || children || address;

  return (
    <StyledLink href={address}
       name={name}
    >
      {LinkText}
    </StyledLink>
  )
}

Link.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
}

export default Link;
