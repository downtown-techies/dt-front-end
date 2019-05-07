import React, { Component } from 'react';
import Button from '../shared/button';
import { ButtonWrapper, ButtonContainer } from '../shared/button/styles';
import Carousel from '../shared/carousel';
import Partners from '../partners';
import Text from '../shared/text';
import theme from '../../theme/primaryTheme';
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
              <ButtonWrapper ref='Raleigh' action='https://www.meetup.com/Downtown-Techies/'>
                <Button type='submit'>RSVP - Raleigh</ Button>
              </ ButtonWrapper>
              <ButtonWrapper ref='Durham' action='https://www.meetup.com/Downtown-Techies-Durham-Edition-by-popular-demand/'>
                <Button type='submit'>RSVP - Durham</ Button>
              </ ButtonWrapper>
            </ButtonContainer>
          </Tagline>
        </TaglineWrapper>
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>
        <Partners />
      </>
    );
  }
}

export default Landing;
