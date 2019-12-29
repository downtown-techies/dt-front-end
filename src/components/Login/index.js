import React, { Component } from 'react';
import styled from '../../theme';
import Image from '../shared/Image';
import badPathImage from '../../assets/images/404.png';

const StyledLogin = styled.div`
`;

class notFound extends Component {
  render() {
    return (
      <StyledLogin>
        <Image src={badPathImage} />
      </ StyledLogin>
    );
  }
}

export default notFound;
