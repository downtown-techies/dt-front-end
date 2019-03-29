import React, { Component } from 'react';
import styled from '../../theme';
import Link from '../shared/link';
import Input from '../shared/input';

const StyledLanding = styled.div`
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      -webkit-transform: skewY(-12deg);
      transform: skewY(-12deg);
      -webkit-transform-origin: 0;
      transform-origin: 0;
      background: linear-gradient(192deg,#ff33a4 0%,#2c0fa0 50%,#00c8e2 90%);
`;

class Landing extends Component {
  render() {
    return (
      <>
        <StyledLanding />
        <Link text='foo' address='http://www.google.com' name='Foo' />
        <Input defaultValue="@probablyup" type="text" />
      </>
    );
  }
}

export default Landing;
