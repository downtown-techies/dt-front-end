import React, { Component } from 'react';
import styled from '../../../theme';
import Image from '../../shared/Image';
import badPathImage from '../../../assets/images/404.png';

const StyledNotFound = styled.div`
`;

class notFound extends Component {
  render() {
    return (
      <StyledNotFound>
        <Image src={badPathImage} />
      </ StyledNotFound>
    );
  }
}

export default notFound;
