import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '../../../theme';

import defaultImage from '../../../assets/images/default.png';

const imageStyles = {
  button: css`
    cursor: pointer;
  `,
  default: css``,
}

const StyledImage= styled.img`
  ${({ imageStyle = 'default' }) => imageStyles[imageStyle]};
`;

const Image = ({src, id, imageStyle, ...rest}) => {
  const imageSrc = src || defaultImage;

  return (
    <StyledImage id={id} 
      imageStyle={imageStyle} 
      src={imageSrc} />
  )
}

export default Image;
