import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../../theme';
import defaultImage from '../../../assets/images/default.png';

const StyledImage = styled.img`
`;

const Image = ({src}) => {
  const imageSrc = src || defaultImage;

  return (
    <StyledImage src={imageSrc} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image;
