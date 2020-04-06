import React from 'react';
import styled from '../../../theme';
import CardFull from './FullCard';
import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';

import './styles.css';

const StyledCard = styled.div`
`;

const Card = ({
  cardStyle,
  header,
  info,
  children,
  name,
  styles,
  className,
  ...rest
}) => {
  switch(cardStyle) {
    case 'imageLeft':
      return (
        <ImageLeft
          className={className}
          cardStyle={cardStyle}
          header={header}
          info={info}
          name={name}
          styles={styles}
          {...rest}
        />
      );
    case 'imageRight':
      return (
        <ImageRight
          className={className}
          cardStyle={cardStyle}
          header={header}
          info={info}
          name={name}
          styles={styles}
          {...rest}
        />
      )
    case 'fullCard':
      return (
        <CardFull
          className={className}
          cardStyle={cardStyle}
          header={header}
          info={info}
          name={name}
          styles={styles}
          {...rest}
        />
      );
    default:
      return (
        <StyledCard
          className={className}
          cardStyle={cardStyle}
          header={header}
          name={name}
          styles={styles}
          {...rest}
        >
          {children}
        </StyledCard>
      );
  }
}

export default Card;

