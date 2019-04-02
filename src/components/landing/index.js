import React, { Component } from 'react';
import styled from '../../theme';
import Text from '../shared/text';
import SimpleSlider from '../shared/carousel';

const StyledLanding = styled.div`
  height: 120vh;
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
        <SimpleSlider />
        <Text>Foo Bar</Text>
      </>
    );
  }
}

export default Landing;
