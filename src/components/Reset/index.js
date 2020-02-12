import React, { Component } from 'react';
import styled from '../../theme';
import Reset from '../forms/ResetForm';

const StyledReset = styled.div`
`;

class notFound extends Component {
  render() {
    return (
      <StyledReset>
        <Reset />
      </ StyledReset>
    );
  }
}

export default notFound;
