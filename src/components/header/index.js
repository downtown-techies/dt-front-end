import React, { Component } from 'react';
import { 
  HeaderContainer, 
  MenuRight, 
  StyledHeader 
} from './styles';
import Link from '../shared/link';
import theme from '../../theme/primaryTheme';
import SvgIcon from '../../assets/svgs'; 
import { items } from '../MenuWrapper/items';
import '../MenuWrapper/styles.css';
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
    const viewBoxWidth = mobile ? 45 : 355;
    const { isOpen } = this.state;

    return (
      <>
        <HeaderContainer>
          <StyledHeader className="header">
            <Link linkStyle='headerLogo' address='/'>
              <SvgIcon
                name={mobile ? 'mobileLogo' : 'altLogo'}
                height={28}
                width={mobile ? 39.65 : 322.67}
                viewBox={`0 0 ${viewBoxWidth} 21.75`}
                style={{cursor: 'pointer'}}
                fill={theme.colors.reverse}/>
            </ Link>
            <MenuRight onClick={this.handleClick}>
              {isOpen ? (
                 <SvgIcon
                   name='close'
                   viewBox='0 0 320 512'
                   style={{cursor: 'pointer'}}
                   fill={theme.colors.reverse}/>
              )
                : (
                  <SvgIcon
                    name='bars'
                    viewBox='0 0 448 512'
                    style={{cursor: 'pointer'}}
                    fill={theme.colors.reverse}/>
                )
              }
            </MenuRight>

          </ StyledHeader>
        </HeaderContainer>
        <Menu 
          id='slideMenu' 
          isOpen={ isOpen }
          right
          width={ '340px' }
        >
          {items}
        </Menu>
      </>
    );
  }
}

export default Header;
