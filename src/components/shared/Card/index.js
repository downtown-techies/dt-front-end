import React from 'react';
import styled from '../../../theme';
import CardFull from './FullCard';
import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';

const StyledCard = styled.div`
`;

const Card = ({
  cardStyle,
  header,
  info,
  children,
  styles,
  className,
  ...rest
}) => {
  switch(cardStyle) {
    case 'imageLeft':
      return (
        <ImageLeft
          cardStyle={cardStyle}
          header={header}
          info={info}
          styles={styles}
          className={className}
          {...rest}
        />
      );
    case 'imageRight':
      return (
        <ImageRight
          cardStyle={cardStyle}
          header={header}
          info={info}
          styles={styles}
          className={className}
          {...rest}
        />
      )
    case 'fullCard':
      return (
        <CardFull
          cardStyle={cardStyle}
          header={header}
          info={info}
          styles={styles}
          className={className}
          {...rest}
        />
      );
    default:
      return (
        <StyledCard
          cardStyle={cardStyle}
          header={header}
          styles={styles}
          className={className}
          {...rest}
        >
          {children}
        </StyledCard>
      );
  }
}

export default Card;

