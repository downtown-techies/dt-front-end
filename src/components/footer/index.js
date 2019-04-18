import React, { Component } from 'react';
import styled from '../../theme';
import theme from '../../theme/primaryTheme';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';
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
        <ButtonContainer>
          <ButtonWrapper ref='Raleigh' action='https://www.meetup.com/Downtown-Techies/'>
            <Button type='submit'>Join Us - Raleigh</ Button>
          </ ButtonWrapper>
          <ButtonWrapper ref='Durham' action='https://www.meetup.com/Downtown-Techies-Durham-Edition-by-popular-demand/'>
            <Button type='submit'>Join Us - Durham</ Button>
          </ ButtonWrapper>
        </ButtonContainer>

        <Links>
          <Link name='meetup' 
            href='https://www.meetup.com/Downtown-Techies/'>
            <SvgIcon name='meetup' viewBox='0 0 512 512' fill='#ffffff' />
          </ Link>
          <Link name='linkedIn'
            href='https://www.linkedin.com/company/downtown-techies/about/'>
            <SvgIcon name='linkedIn'viewBox='0 0 448 512' fill='#fff' />
          </ Link>
          <Link name='instagram' 
            href='https://www.instagram.com/downtowntechies/'>
            <SvgIcon name='instagram' viewBox='0 0 448 512' fill='#fff' />
          </ Link>
        </Links>
      </ StyledFooter>
    );
  }
}

export default Footer;
