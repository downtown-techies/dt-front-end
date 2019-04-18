import React, { Component } from 'react';
import styled from '../../theme';
import theme from '../../theme/primaryTheme';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';
import Text from '../shared/text';
import Button from '../shared/button';
import { ButtonWrapper, ButtonContainer } from '../shared/button/styles';

const StyledFooter = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.reverse};
  padding: 1rem 10vw;
  z-index: 1;
  position: relative;
`;

const Links = styled.div`
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter className='footer'>
        <Text tag='p' textStyle='small' color='#fff'>Give us a follow and help us grow the community</Text>
        <Links>
          <Link name='linkedIn'
            linkStyle='inlineFooter'
            address='https://www.linkedin.com/company/downtown-techies/about/'>
            <SvgIcon name='linkedIn'viewBox='0 0 448 512' fill='#fff' />
          </ Link>
          <Link name='instagram' 
            linkStyle='inlineFooter'
            address='https://www.instagram.com/downtowntechies/'>
            <SvgIcon name='instagram' viewBox='0 0 448 512' fill='#fff' />
          </ Link>
        </Links>
      </ StyledFooter>
    );
  }
}

export default Footer;
