import React, { useState, useEffect } from 'react';
import styled from '../theme';
import Header from '../components/header';
// import Footer from '../components/footer';
import Main from '../components/main';
import { apiRequest, apiBaseUrl } from '../helpers/api';

// TODO: add SRI...subresource integrity or some additional security measure

function getToken(publicKey){
  return apiRequest.getJwtKey(
    `${apiBaseUrl}/authenticate`,
    publicKey
  )
  .then(function (response) {
    console.log(response.data.jwtKey);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


function App() {
  const [token] = useState('');
  const [publicKey] = useState(`${process.env.REACT_APP_PUBLIC_KEY}`);

  useEffect(() => {
    localStorage.setItem('token', getToken(publicKey));
  });

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
