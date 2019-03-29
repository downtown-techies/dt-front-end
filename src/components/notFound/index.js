import React, { Component } from 'react';
import styled from '../../theme';

const StylednotFound = styled.div`
`;

class notFound extends Component {
  render() {
    return (
      <StylednotFound>
        404 not found
      </ StylednotFound>
    );
  }
}

export default notFound;
