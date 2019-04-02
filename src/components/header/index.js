import React, { Component } from 'react';
import { 
  HeaderContainer, 
  MenuRight, 
  StyledHeader 
} from './styles';
import theme from '../../theme/primaryTheme';
import SvgIcon from '../../assets/svgs'; 

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <StyledHeader className="header">
          <SvgIcon
            name='altLogo'
            height={28}
            width={322.67}
            viewBox='0 0 322.67 28'
            fill={theme.colors.reverse}/>
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
