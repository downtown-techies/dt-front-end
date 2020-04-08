import React from 'react';
import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import { WorkContainer } from './styles.js';

const Work = (props) => {
  return (
    <WorkContainer>
        <Text
          className="work-container__header"
          sizeFactor={1}
          color={theme.colors.secondary}
          textStyle="cardHeadline">
          Where our<br/>developers’ code lives
        </Text>
    logos


    </WorkContainer>
  );
}

export default Work;

