import React from 'react';
import Text from '../shared/text';
import Button from '../shared/button';
import Image from '../shared/image';
import summerBashImage from '../../assets/images/landscapeSummerBash.jpg';
import summerBashMobile from '../../assets/images/summerBashMobile.jpg';
import { 
  StyledSummerBash, 
  ImageContainer,
  HeaderWrapper, 
} from './styles';
import {
  isMobile
} from 'react-device-detect';

const SummerBash = (props) => {
  const BashImage = (isMobile) => {
    return isMobile ? (
      <Image id='eventbrite-widget-modal-trigger-65133671565' 
        imageStyle='button'
        src={summerBashMobile} /> 
    ) : (
      <Image id='eventbrite-widget-modal-trigger-65133671565' 
        imageStyle='button'
        src={summerBashImage} /> 
    )
  }

  return (
    <StyledSummerBash className='footer'>
      <HeaderWrapper>
        <Text tag='h3' textStyle='callToAction' color='white'>Join the Early Birds for the Summer Bash</Text> 
        <Text tag='p' textStyle='eyebrow' color='white'>(click below)</Text> 
        <ImageContainer>
          {BashImage(isMobile)}
        </ImageContainer>
        <Button id='eventbrite-widget-modal-trigger-65133671565' 
          type='button' buttonStyle='submit' color='white' backgroundColorHover='#070036' backgroundColor='#010951'>Sign up for the Summer Bash
        </Button>
      </ HeaderWrapper>
    </ StyledSummerBash>
  );
}

export default SummerBash;
