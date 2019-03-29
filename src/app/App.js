import React, { Component } from 'react';
import styled from '../theme';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';

const StyledApp = styled.div`
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
