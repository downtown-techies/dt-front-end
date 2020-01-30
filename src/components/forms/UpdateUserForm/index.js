import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import  UpdateUserForm from './form.js';
import { StyledUpdateUser } from './styles.js';
import {Redirect} from 'react-router-dom';
import jwt from 'jwt-decode';

const UpdateUser = (props) => {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState({});
  const [id, setId] = useState(null);
  const [loginRedirect, setLoginRedirect] = useState(false);
  const jwtToken = localStorage.token;

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    let id, token;

    if(jwtToken && jwtToken.length > 1) {
      token = jwt(jwtToken);
    } else {
      setLoginRedirect(true);
      return;
    }

    const {data: userData} = token;

    if(userData){
      id = userData.id;
    }

    apiRequest.get(
      `${apiBaseUrl}/user/account_info/${id}`,
      jwtToken
    )
    .then(function (response) {
      if (response.status === 200){
        const {id} = response.data;

        setData(response.data);
        if(id !== null){setId(id)}
        setDataLoaded(true);
      } else {
        setDataLoaded(false);
      };
    })
    .catch(function (error) {
      setDataLoaded(false);
      console.log(error);
    })
  }
  if (loginRedirect) {
    return(
      <Redirect to='/login' />
    )
  }
  return (
    <StyledUpdateUser>
      <UpdateUserForm data={data} id={id} dataLoaded={dataLoaded} />
    </ StyledUpdateUser>
  );
}

export default UpdateUser;
