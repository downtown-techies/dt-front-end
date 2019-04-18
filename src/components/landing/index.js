import React, { Component } from 'react';
import Button from '../shared/button';
import { ButtonWrapper, ButtonContainer } from '../shared/button/styles';
import Carousel from '../shared/carousel';
import Text from '../shared/text';
import theme from '../../theme/primaryTheme';
import Modal from 'react-modal';
import {  
  CarouselWrapper, 
  TaglineWrapper, 
  Tagline, 
  EyeBrow
} from './styles.js';

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
            <ButtonContainer>
              <ButtonWrapper ref='signup' action='/signup'>
                <Button type='submit'>Join Us</ Button>
              </ ButtonWrapper>
            </ButtonContainer>
          </Tagline>
        </TaglineWrapper>
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>
      </>
    );
  }
}

export default Landing;
