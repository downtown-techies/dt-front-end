import * as React from 'react';
import theme from '../../../../theme/primaryTheme';
import { StyledCard, TextContainer } from './styles.js';
import Text from '../../../shared/Text';

const ImageLeft = ({
  cardStyle,
  children,
  header={},
  image='',
  name='image',
  info={},
  className,
  ...rest
}) => {
  const {
    className: headerClassName='', 
    content: headerContent='', 
    color: headerColor=theme.colors.backgroundDark,
    textStyle: headerTextStyle='cardHeadline'
  } = header;
  const {
    className: infoClassName='', 
    content: infoContent='', 
    color: infoColor=theme.colors.backgroundDark,
    textStyle: infoTextStyle='cardCopy'
  } = info;

  return (
    <StyledCard
      cardStyle={cardStyle}
      name={name}
      image={image}
      className={className}
      {...rest}
    >
      <TextContainer name={name}>
        <Text 
          className={headerClassName}
          color={headerColor} 
          textStyle={headerTextStyle}>
          {headerContent}
        </Text>
        <Text 
          className={infoClassName}
          color={infoColor} 
          textStyle={infoTextStyle}>
          {infoContent}
        </Text>
      </TextContainer>
    </StyledCard>
  );
}
export default ImageLeft;
