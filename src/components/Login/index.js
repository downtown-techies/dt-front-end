import React, { Component } from 'react';
import styled from '../../theme';
import Login from '../forms/LoginForm';

const StyledLogin = styled.div`
`;

class notFound extends Component {
  render() {
    return (
      <StyledLogin>
        <Login />
      </ StyledLogin>
    );
  }
}

export default notFound;
