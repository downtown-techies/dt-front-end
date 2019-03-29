import React, { Component } from 'react';
import styled from '../../theme';

const StyledHeader = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1rem 10vw;
  z-index: 1;
  position: relative;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader className="header">
        Header
      </ StyledHeader>
    );
  }
}

export default Header;
