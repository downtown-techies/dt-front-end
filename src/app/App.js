import React, { useState, useEffect } from 'react';
import Header from '../components/subComponents/Header';
import Main from '../components/Main';
import Footer from '../components/subComponents/Footer';
import { apiRequest, apiBaseUrl } from '../helpers/api';

// TODO: add SRI...subresource integrity or some additional security measure
// TODO: add call to get and store uuid 

const getToken = (publicKey) => {
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

const App = () => {
  // const [token] = useState('');
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
