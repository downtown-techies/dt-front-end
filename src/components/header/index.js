import React, { Component } from 'react';
import { 
  HeaderContainer, 
  MenuRight, 
  StyledHeader 
} from './styles';
import SvgIcon from '../../assets/svgs'; 

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <StyledHeader className="header">
          
          <h1> Downtown Techies</h1>
          <MenuRight>
            <SvgIcon
              name={'menu'}
              same={false}
              height={42}
              width={42}
              viewBox='0 0 32 32' 
              position='relative'
              fill='#fff'
            />
          </MenuRight>
        </ StyledHeader>
      </HeaderContainer>
    );
  }
}

export default Header;
