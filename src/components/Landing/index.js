import React from 'react';
import Signup from '../pages/Signup';
import Ethos from '../pages/Ethos';
import Values from '../pages/Values';
import WeDo from '../pages/WeDo';
import Beliefs from '../pages/Beliefs';
import Work from '../pages/Work';
import Text from '../shared/Text';
import theme from '../../theme/primaryTheme';

import { 
  AboveTheFold, 
  BottomOfPage,
  CallToAction,
  LandingWrapper, 
} from './styles.js';

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
      <WeDo />
      <Work />
      <Beliefs />
      <BottomOfPage>
        <CallToAction sizeFactor={1.7} bold textStyle="cardHeadline" color={theme.colors.secondary}>
          Let's connect
        </CallToAction>
        <Signup formColor={theme.colors.reverse} />
      </BottomOfPage>
    </LandingWrapper>
  );
}

export default Landing;
