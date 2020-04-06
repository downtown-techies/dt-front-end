import React from 'react';
// import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import firstFlight from '../../../assets/images/firstFlight.jpg';

import { 
  EthosContainer, 
  Aesthetics,
  Technology, 
  Simplify,
  Information
} from './styles.js';

import './styles.css';

const Ethos = (props) => {
  return (
    <EthosContainer>
      <Aesthetics 
        className="aesthetics-content"
        header={{
            'className':'aesthetics-content__header',
            'color': theme.colors.backgroundDark, 
            'content': 'Aesthetics matter'}}
        info={{
            'color': theme.colors.backgroundDark, 
            'className':'aesthetics-content__info',
            'content': 'Intuitive user-experiences lead to\nbeautiful user-interfaces'}}
        image={firstFlight}
        name="firstFlight"
        cardStyle="imageLeft">
      </Aesthetics>
      <Technology
        className="technology-content"
        header={{
            'className':'technology-content__header',
            'color': theme.colors.accent, 
            'content': 'Technology is a tool to make our lives easier' }}
        info={{
            'color': theme.colors.accent, 
            'className':'technology-content__info',
            'content': 'Well-crafted tools bring joy'}}
        image={'firstFlight'}
        cardStyle="imageRight">
      </Technology>
      <Simplify
        className="simplify-content"
        header={{
            'className':'simplify-content__header',
            'color': theme.colors.accent, 
            'content': 'Complex problems must be made simple'}}
        info={{
            'color': theme.colors.accent, 
            'className':'simplify-content__info',
            'content': 'A solution that is difficult to understand, is not yet solved'}}
        image={'firstFlight'}
        cardStyle="imageLeft">
      </Simplify>
      <Information
        className="information-content"
        header={{
            'className':'information-content__header',
            'color': theme.colors.accent, 
            'content': 'Information is freedom'}}
        info={{
            'color': theme.colors.accent, 
            'className':'information-content__info',
            'content': 'Technology empowers the commmunity'}}
        image={'firstFlight'}
        cardStyle="imageRight">
      </Information>
    </EthosContainer>
  );
}

export default Ethos;
