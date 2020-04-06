import React, { useState } from 'react';
import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import { 
  EthosContainer, 
  Aesthetics,
  Technology, 
  Simplify,
  Information
} from './styles.js';

const Ethos = (props) => {
  return (
    <EthosContainer>
      <Aesthetics 
        header={{'textStyle': 'headline', 'sizeFactor':2, 'color': theme.colors.white, 'content': 'Aesthetics matter'}}
        info={{'color': theme.colors.white, 'content': 'Intuitive user-experiences lead to beautiful user-interfaces'}}
        cardStyle="fullCard">
      </Aesthetics>
      <Technology
        header={{'textStyle': 'headline', 'color': theme.colors.accent, 'content': 'Technology is a tool to make our lives easier'}}
        info={{'color': theme.colors.accent, 'content': 'Well-crafted tools bring joy'}}
        cardStyle="split50">
      </Technology>
      <Simplify
        header={{'textStyle': 'headline', 'color': theme.colors.accent, 'content': 'Complex problems must be made simple'}}
        info={{'color': theme.colors.accent, 'content': 'A solution that is difficult to understand, is not yet solved'}}
        cardStyle="fullCard">
      </Simplify>
      <Information
        header={{'textStyle': 'headline', 'color': theme.colors.accent, 'content': 'Information is freedom'}}
        info={{'color': theme.colors.accent, 'content': 'Technology empowers the commmunity'}}
        cardStyle="split4060">
      </Information>
    </EthosContainer>
  );
}

export default Ethos;
