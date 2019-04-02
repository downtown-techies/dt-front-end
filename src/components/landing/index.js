import React, { Component } from 'react';
import Carousel from '../shared/carousel';
import Text from '../shared/text';
import theme from '../../theme/primaryTheme';
import styled from '../../theme';

const Tagline = styled.div`
  position: relative;
  bottom: 30vh;
  height: 0;
  z-index: 1;
`;

const EyeBrow = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  height: 0;
  top: 0.5rem;
  z-index: 1;
`;

class Landing extends Component {
  render() {
    return (
      <>
        <EyeBrow>
          <Text textStyle='eyebrow' color={theme.colors.reverse}>
            #gigLifeHustle
          </Text>
        </EyeBrow>
        <Carousel />
        <Tagline>
          <Text textStyle='tagLine' color={theme.colors.reverse}>
            We partner with local influencers to bring techies together through the best events and community
          </Text>
        </Tagline>
      </>
    );
  }
}

export default Landing;
