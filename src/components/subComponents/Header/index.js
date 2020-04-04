import React, { Component } from 'react';
import { 
  HeaderContainer, 
  MenuRight, 
  StyledHeader 
} from './styles';
import Link from '../../shared/Link';
import theme from '../../../theme/primaryTheme';
import SvgIcon from '../../../assets/svgs'; 
import MenuList from '../MenuList';
import '../MenuList/styles.css';
import { slide as Menu } from 'react-burger-menu'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1280,
      isOpen: false,
    };
  }

  componentWillMount(){
    this.setState({width: window.innerWidth});
  }

  handleClick = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen 
    });
  };

  render() {
    const mobile = this.state.width < 724;
    const viewBoxWidth = mobile ? 68.2 : 244.372;
    const viewBoxHeight = mobile ? 54 : 28;
    const { isOpen } = this.state;

    const style = isOpen ? {position: 'fixed', width: '100vw', zIndex: 9999} : {};
    const fillerStyle = isOpen ? {height: '0'} : {display: 'none'};

    return (
      <>
        <HeaderContainer style={style}>
          <StyledHeader className="header">
            <Link linkStyle='headerLogo' target='_self' address='/'>
              <SvgIcon
                name={mobile ? 'mobileLogo' : 'altLogo'}
                height={28}
                width={mobile ? 34.13 : 244.372}
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                style={{cursor: 'pointer'}}
                fill={theme.colors.backgroundDark} />
            </ Link>
            {/*
            <MenuRight onClick={this.handleClick}>
              {isOpen ? (
                 <SvgIcon
                   name='close'
                   viewBox='0 0 320 512'
                   style={{cursor: 'pointer'}}
                   fill={theme.colors.white} />
              )
                : (
                  <SvgIcon
                    name='bars'
                    viewBox='0 0 448 512'
                    style={{cursor: 'pointer'}}
                    fill={theme.colors.backgroundDark} />
                )
              }
            </MenuRight>
            */}
          </ StyledHeader>
        </HeaderContainer>
        <div style={fillerStyle} />
        <Menu 
          id='slideMenu' 
          isOpen={ isOpen }
          right
          width={ '340px' }
        >
        <MenuList />
        </Menu>
      </>
    );
  }
}

export default Header;
