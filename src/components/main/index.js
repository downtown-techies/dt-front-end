import React, { Component } from 'react';
import styled from '../../theme';

const StyledMain = styled.div`
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      -webkit-transform: skewY(-12deg);
      transform: skewY(-12deg);
      -webkit-transform-origin: 0;
      transform-origin: 0;
      background: linear-gradient(192deg,#ff33a4 0%,#2c0fa0 50%,#00c8e2 90%);
`;

class Main extends Component {
  render() {
    return (
      <StyledMain>
        Main
      </ StyledMain>
    );
  }
}

export default Main;