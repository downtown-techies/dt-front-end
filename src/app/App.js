import React from 'react';
import Header from '../components/subComponents/Header';
import Main from '../components/Main';
import Footer from '../components/subComponents/Footer';

// TODO: add SRI...subresource integrity or some additional security measure
// TODO: add call to get and store uuid 

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
