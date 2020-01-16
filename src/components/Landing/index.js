import React, { Component } from 'react';
import Button from '../shared/Button';
import { ButtonSection, ButtonWrapper } from '../shared/Button/styles';
import Partners from '../subComponents/Partners';
import MeetupList from '../subComponents/MeetupList';
import Text from '../shared/Text';
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
            <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/explore/tags/giglifehustle/'>
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
                <ButtonWrapper ref='signup' action='/signup'>
                  <Button buttonStyle='big' type='submit'>Join Us</ Button>
                </ ButtonWrapper>
              </ButtonSection>
            </Tagline>
          </TaglineWrapper>
        </LandingWrapper>
        <MeetupList />
        <Partners />
      </>
    );
  }
}

export default Landing;
