import React, { Component } from 'react';
import Button from '../shared/button';
import { ButtonWrapper, ButtonSection } from '../shared/button/styles';
import Partners from '../partners';
import SummerBash from '../summerBash';
import Text from '../shared/text';
import Link from '../shared/link';
import theme from '../../theme/primaryTheme';
import {  
  LandingWrapper,
  TaglineWrapper, 
  Tagline, 
  EyeBrow
} from './styles.js';


class Landing extends Component {
  render() {
    return (
      <>
        <LandingWrapper>
          <EyeBrow>
            <a target='_blank' href='https://www.instagram.com/explore/tags/giglifehustle/'>
              <Text textStyle='eyebrow' color={theme.colors.reverse}>
                #gigLifeHustle
              </Text>
            </a>
          </EyeBrow>
          <TaglineWrapper>
            <Tagline>
              <Text textStyle='tagLine' color={theme.colors.reverse}>
                We partner with local influencers to bring techies together through the best events and community
              </Text>
              <ButtonSection>
              <Button id='eventbrite-widget-modal-trigger-65133671565' 
                type='button'>Sign up for the Summer Bash
              </Button>
              </ButtonSection>
              {/*
              <ButtonSection>
                <ButtonWrapper ref='signup' action='/signup'>
                  <Button buttonStyle='big' type='submit'>Join Us</ Button>
                </ ButtonWrapper>
              </ButtonSection>
              */}
            </Tagline>
          </TaglineWrapper>
        </LandingWrapper>
        <SummerBash />
        <Partners />
      </>
    );
  }
}

export default Landing;
