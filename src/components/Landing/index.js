import React from 'react';
import Signup from '../pages/Signup';
import Ethos from '../pages/Ethos';
import Values from '../pages/Values';
// import Work from '../pages/Work';
import Text from '../shared/Text';
import theme from '../../theme/primaryTheme';

import { LandingWrapper, AboveTheFold } from './styles.js';

const Landing = () => {
  console.log(theme.colors.reverse);
  return (
    <LandingWrapper>
      <AboveTheFold>
        <Text sizeFactor={2} bold textStyle="tagLine" color={theme.colors.reverse}>
          Limitless Possibility
        </Text>
        <Signup />
      </AboveTheFold>
      <Values />
      <Ethos />
      {/* <Work /> */}
      <Signup formColor={theme.colors.reverse} />
    </LandingWrapper>
  );
}

export default Landing;
