import React, { Component } from 'react';
import SvgIcon from '../../../assets/svgs';
import Link from '../../shared/Link';
import Text from '../../shared/Text';
import { StyledFooter, Links } from './styles';

class Footer extends Component {
  render() {
    return (
      <StyledFooter className='footer'>
        <Text tag='p' sizeFactor={0.6} color='rgba( 45,45,45,1 )'>Give us a follow and help us grow the community</Text>
        <Links>
          <Link name='linkedIn'
            linkStyle='inlineFooter'
            target='_blank'
            address='https://www.linkedin.com/company/adaptiv-solutions/about'>
            <SvgIcon name='linkedIn'viewBox='0 0 448 512' fill='#fff' />
          </ Link>
          <Link name='instagram' 
            linkStyle='inlineFooter'
            target='_blank'
            address='https://www.instagram.com/thisisadaptiv/'>
            <SvgIcon name='instagram' viewBox='0 0 448 512' fill='#fff' />
          </ Link>
        </Links>
      </ StyledFooter>
    );
  }
}

export default Footer;
