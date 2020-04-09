import React from 'react';
// import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import firstFlight from '../../../assets/images/firstFlight.jpg';
import printingPress from '../../../assets/images/printingPress.jpg';
import space from '../../../assets/images/space.jpg';
import modelT from '../../../assets/images/modelT.jpg';

import { 
  EthosContainer,
  AestheticsContainer,
  TechnologyContainer,
  SimplifyContainer,
  InformationContainer,
  Aesthetics,
  Technology,
  Simplify,
  Information,
} from './styles.js';

const Ethos = (props) => {
  return (
    <EthosContainer>
      <AestheticsContainer>
        <Aesthetics 
          className="aesthetics-content"
          header={{
              'className':'aesthetics-content__header',
              'color': theme.colors.backgroundDark, 
              'content': 'Aesthetics matter'}}
          info={{
              'className':'aesthetics-content__info',
              'color': theme.colors.backgroundDark, 
              'content': 'Intuitive user-experiences lead to\nbeautiful user-interfaces'}}
          image={space}
          name="space"
          cardStyle="imageLeft" />
      </AestheticsContainer>
      <TechnologyContainer>
        <Technology
          className="technology-content"
          header={{
              'className':'technology-content__header',
              'color': theme.colors.backgroundDark, 
              'content': 'Well-crafted\ntools bring joy' }}
          info={{
              'className':'technology-content__info',
              'color': theme.colors.backgroundDark, 
              'content': 'Technology is a tool\nto make our lives easier'}}
          image={modelT}
          name="model T"
          cardStyle="imageRight" />
      </TechnologyContainer>
      <InformationContainer>
        <Information
          className="information-content"
          header={{
              'className':'information-content__header',
              'color': theme.colors.backgroundDark, 
              'content': 'Information\nis Freedom'}}
          info={{
              'color': theme.colors.backgroundDark, 
              'className':'information-content__info',
              'content': 'Technology empowers\nthe commmunity'}}
          image={printingPress}
          name="printingPress"
          cardStyle="imageLeft" />
      </InformationContainer>
      <SimplifyContainer>
        <Simplify
          className="simplify-content"
          header={{
              'className':'simplify-content__header',
              'color': theme.colors.backgroundDark, 
              'content': 'Simplify\nthe complex'}}
          info={{
              'className':'simplify-content__info',
              'color': theme.colors.backgroundDark, 
              'content': 'A solution that is\ndifficult to understand,\nis not yet solved'}}
          image={firstFlight}
          name="firstFlight"
          cardStyle="imageRight" />
      </SimplifyContainer>
    </EthosContainer>
  );
}

export default Ethos;
