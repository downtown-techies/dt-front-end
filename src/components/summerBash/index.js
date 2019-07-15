import React, { Component } from 'react';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';
import Text from '../shared/text';
import Image from '../shared/image';
import summerBashImage from '../../assets/images/landscapeSummerBash.jpg';
import Carousel from '../shared/carousel';
import { 
  StyledSummerBash, 
  ImageContainer,
  HeaderWrapper, 
  Links 
} from './styles';

class SummerBash extends Component {
  render() {
    return (
      <StyledSummerBash className='footer'>
        <HeaderWrapper>
          <Text tag='h3' textStyle='callToAction' color='white'>Join the Early Birds for the Summer Bash</Text> 
          <Text tag='p' textStyle='eyebrow' color='white'>(click below)</Text> 
          <ImageContainer>
            <Image id='eventbrite-widget-modal-trigger-65133671565' 
              imageStyle='button'
              src={summerBashImage} /> 
          </ImageContainer>
        </ HeaderWrapper>
      </ StyledSummerBash>
    );
  }
}

export default SummerBash;
