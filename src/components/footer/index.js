import React, { Component } from 'react';
import styled from '../../theme';
import theme from '../../theme/primaryTheme';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';

const StyledFooter = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.reverse};
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1rem 10vw;
  z-index: 1;
  position: relative;
`;

const Links = styled.div`
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter className="footer">
        <Links>
          <Link name='meetup' 
            href='https://www.meetup.com/Downtown-Techies/'>
            <SvgIcon name='meetup' fill='#fff' />
          </ Link>
          <Link name='linkedIn'
            href='https://www.linkedin.com/company/downtown-techies/about/'>
            <SvgIcon name='linkedIn' fill='#fff' />
          </ Link>
          <Link name='instagram' 
            href='https://www.instagram.com/downtowntechies/'>
            <SvgIcon name='menu' fill='#fff' />
          </ Link>
        </Links>
      </ StyledFooter>
    );
  }
}

export default Footer;
