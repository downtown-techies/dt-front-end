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
  constructor(props) {
    super(props);
    this.state = {width: 1280};
  }

  componentWillMount(){
    this.setState({width: window.innerWidth});
  }
  render() {
    const mobile = this.state.width < 724;

    return (
      <HeaderContainer>
        <StyledHeader className="header">
          <Link linkStyle='headerLogo' address='/'>
            <SvgIcon
              name={mobile ? 'mobileLogo' : 'altLogo'}
              height={28}
              width={322.67}
              viewBox='0 0 355 21.75'
              style={{cursor: 'pointer'}}
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
