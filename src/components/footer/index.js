import React, { Component } from 'react';
import styled from '../../theme';

const StyledFooter = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1rem 10vw;
  z-index: 1;
  position: relative;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter className="footer">
        Footer
      </ StyledFooter>
    );
  }
}

export default Footer;
