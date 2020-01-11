import React, { Component } from 'react';
import styled from '../../theme';

const StyledLogout = styled.div`
  color: white;
  margin: 8rem auto;
  text-align: center;
  min-height: calc(80vh - 17rem);
`;

class notFound extends Component {
  render() {
    return (
      <StyledLogout>
        Logged out successfully <br/> but sad to see you go!
      </ StyledLogout>
    );
  }
}

export default notFound;
