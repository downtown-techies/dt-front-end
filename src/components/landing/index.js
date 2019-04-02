import React, { Component } from 'react';
import Button from '../shared/button';
import Carousel from '../shared/carousel';
import Text from '../shared/text';
import theme from '../../theme/primaryTheme';
import styled from '../../theme';

const EyeBrow = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  height: 0;
  top: 0.5rem;
  z-index: 1;
`;
 
const TaglineWrapper = styled.div`
  padding: 2rem;
  position: absolute;
  top: 20vh;
  width 100vw;
  /* border-radius: 0.25rem;
  background-color: ${theme.colors.backgroundTransparent}
  */

  @media (min-width: 700px) {
    top: 30vh;
  }
`;

const Tagline = styled.div`
  position: relative;
  height: 0;
  max-width: 90%;
  margin: 0 auto;
  z-index: 1;

  @media (min-width: 700px) {
    max-width: 50%;
  }
`;

const ButtonWrapper = styled.form`
  margin-top: 2rem;
  width: 100%;
  text-align: center;
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
        <TaglineWrapper>
          <Tagline>
            <Text textStyle='tagLine' color={theme.colors.reverse}>
              We partner with local influencers to bring techies together through the best events and community
            </Text>
            <ButtonWrapper action='https://www.meetup.com/Downtown-Techies/'>
              <Button type='submit'>Join Us</ Button>
            </ ButtonWrapper>
          </Tagline>
        </TaglineWrapper>
        <Carousel />
      </>
    );
  }
}

export default Landing;
