import React, { useState, useEffect } from 'react';
import styled from '../theme';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import { apiRequest, apiBaseUrl } from '../helpers/api';

// TODO: add SRI...subresource integrity or some additional security measure
// TODO: add call to get and store uuid 

function getToken(publicKey){
  return apiRequest.getJwtKey(
    `${apiBaseUrl}/authenticate`,
    publicKey
  )
  .then(function (response) {
    const jwtKey = ( response.data && response.data.jwtKey ) || 'iEmpty';
    localStorage.setItem('token', jwtKey);
  })
  .catch(function (error) {
    console.log(error);
  })
}


function App() {
  const [token] = useState('');
  const [publicKey] = useState(`${process.env.REACT_APP_PUBLIC_KEY}`);

  useEffect(() => {
    getToken(publicKey);
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
