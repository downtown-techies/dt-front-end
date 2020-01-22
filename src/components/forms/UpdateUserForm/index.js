import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import  UpdateUserForm from './form.js';
import { StyledUpdateUser } from './styles.js';


const jwtToken = localStorage.token;

const UpdateUser = (props) => {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    apiRequest.get(
      `${apiBaseUrl}/user/account_info/2`,
      jwtToken
    )
    .then(function (response) {
      if (response.status === 200){
        setData(response.data);
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

  return (
    <StyledUpdateUser>
      <UpdateUserForm data={data} dataLoaded={dataLoaded} />
    </ StyledUpdateUser>
  );
}

export default UpdateUser;
