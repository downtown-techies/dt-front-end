import React, { Component } from 'react';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';
import MeetupsDropdown from '../meetupsDropdown';
import Text from '../shared/text';
import { StyledFooter, Links } from './styles';

class Footer extends Component {
  render() {
    return (
      <StyledFooter className='footer'>
        <Text tag='p' textStyle='small' color='#fff'>Give us a follow and help us grow the community</Text>
        <Links>
          <Link name='linkedIn'
            linkStyle='inlineFooter'
            target='_blank'
            address='https://www.linkedin.com/company/downtown-techies/about/'>
            <SvgIcon name='linkedIn'viewBox='0 0 448 512' fill='#fff' />
          </ Link>
          <Link name='instagram' 
            linkStyle='inlineFooter'
            target='_blank'
            address='https://www.instagram.com/downtowntechies/'>
            <SvgIcon name='instagram' viewBox='0 0 448 512' fill='#fff' />
          </ Link>
          <Link name='facebook' 
            linkStyle='inlineFooter'
            target='_blank'
            address='https://www.facebook.com/downtowntechies/'>
            <SvgIcon name='facebook' viewBox='0 0 448 512' fill='#fff' />
          </ Link>
          <MeetupsDropdown />
        </Links>
      </ StyledFooter>
    );
  }
}

export default Footer;
