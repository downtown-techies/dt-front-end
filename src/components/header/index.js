import React, { Component } from 'react';
import { HeaderContainer , StyledHeader } from './styles';
import SvgIcon from '../../assets/svgs'; 

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <StyledHeader className="header">
          Downtown Techies 
          <SvgIcon
            name={'menu'}
            width={20}
            height={20}
            viewBox="0 0 12 12"
          />
        </ StyledHeader>
      </HeaderContainer>
    );
  }
}

export default Header;
