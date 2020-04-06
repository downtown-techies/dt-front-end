import * as React from 'react';
import theme from '../../../../theme/primaryTheme';
import { StyledCard } from './styles.js';
import Text from '../../../shared/Text';

const CardFull = ({
  cardStyle,
  children,
  header={},
  info={},
  className,
  ...rest
}) => {

  const {
    content: headerContent='', 
    color: headerColor=theme.colors.backgroundDark,
    textStyle: headerTextStyle='headline',
    sizeFactor: headerSizeFactor=1, 
  } = header;

  const {
    content: infoContent='', 
    color: infoColor=theme.colors.backgroundDark,
    textStyle: infoTextStyle='default',
    sizeFactor: infoSizeFactor=1, 
  } = info;

  return (
    <StyledCard
      cardStyle={cardStyle}
      className={className}
      {...rest}
    >
      <Text color={headerColor} sizeFactor={headerSizeFactor} textStyle={headerTextStyle}>
        {headerContent}
      </Text>
      <Text 
        color={infoColor}
        sizeFactor={infoSizeFactor} 
        textStyle={infoTextStyle}>
        {infoContent}
      </Text>
    </StyledCard>
  );
}
export default CardFull;
