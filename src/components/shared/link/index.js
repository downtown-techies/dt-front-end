import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';

const linkStyles = {
  inlineFooter: css`
    margin-right: 0.5rem;
  `,
  default: css`
  `,
};

const StyledLink = styled.a`
  ${({ linkStyle = 'default' }) => linkStyles[linkStyle]};
  color: ${({ color }) => (color ? color : theme.colors.primary)};
`;



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
