import * as React from 'react';
import theme from '../../../../theme/primaryTheme';
import { StyledCard } from './styles.js';
import Text from '../../../shared/Text';


// const cardStyles = {
//   default: css`
//   `,
// };

const ImageRight = ({
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
    textStyle: headerTextStyle='headline'
  } = header;
  const {
    content: infoContent='', 
    color: infoColor=theme.colors.backgroundDark,
    textStyle: infoTextStyle='default'
  } = info;

  return (
    <StyledCard
      cardStyle={cardStyle}
      className={className}
      {...rest}
    >
      <Text color={headerColor} textStyle={headerTextStyle}>
        {headerContent}
      </Text>
      <Text color={infoColor} textStyle={infoTextStyle}>
        {infoContent}
      </Text>
    </StyledCard>
  );
}
export default ImageRight;
