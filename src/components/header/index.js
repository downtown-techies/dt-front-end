import React, { Component } from 'react';
import { 
  HeaderContainer, 
  MenuRight, 
  StyledHeader 
} from './styles';
import Button from '../shared/button';
import { ButtonWrapper, HeaderButtonContainer } from '../shared/button/styles';
import Link from '../shared/link';
import theme from '../../theme/primaryTheme';
import SvgIcon from '../../assets/svgs'; 

// TODO FIX The render of join us

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <StyledHeader className="header">
          <Link linkStyle='headerLogo' address='/'>
            <SvgIcon
              name='altLogo'
              height={28}
              width={322.67}
              viewBox='0 0 355 21.75'
              fill={theme.colors.reverse}/>
          </ Link>
          <MenuRight>
            {
              window.location.href.indexOf('signup') < 0 ? 
                <HeaderButtonContainer>
                  <ButtonWrapper ref='signup' action='/signup'>
                    <Button type='submit'>Join Us</ Button>
                  </ ButtonWrapper>
                </HeaderButtonContainer> :
              null

            }

          </MenuRight>
        </ StyledHeader>
      </HeaderContainer>
    );
  }
}

export default Header;
