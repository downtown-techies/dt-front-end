import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Text from '../shared/Text';
import Link from '../shared/Link';
import jwt from 'jwt-decode';
import moment from 'moment';
import {Redirect} from 'react-router-dom';
import { 
  StyledUserInfo,
} from './styles';

const UserInfo= (props) => {
  const [data, setData] = useState({});
  const [id, setId] = useState(null);
  const [loginRedirect, setLoginRedirect] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    let id;
    const jwtToken = localStorage.token;

    let token;

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
        setData(response.data);
        const {id} = response.data;
        if(id !== null){setId(id)}
      } else {
        console.log(response.status);
      };
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const UserInfo = (data) => {
    if ( data !== {} ) {
        const {
          account_id: accountId, address_line_1: addressLineOne, 
          address_line_2: addressLineTwo, address_line_3: addressLineThree, 
          address_line_4: addressLineFour, state, first_name: firstName, 
          last_name: lastName, email, state_abbr: stateAbbr, postal_code: postalCode, 
          preferred_contact: preferredContact, ph_number: phoneNumber, website, 
          intro_description: intro, createdAt, gig_category: category
        } = data;

        const joinedDate = moment(createdAt).format("MMMM Do, YYYY");

        const name = `${firstName} ${lastName}`;

        return (
          <>
            <Text tag='h3' textStyle='big'>{name ? name : 'empty'}</Text>
            {category ? (
              <>
                <Text>Category: {category}</Text>
              </>
            ) : (null)}
            {accountId ? (
              <>
                <Text>AccountId: {`1005${accountId}`}</Text>
              </>
            ) : (null)}
            {( addressLineOne || addressLineTwo || addressLineThree || addressLineFour) ? 
              (
                <>
                  {(addressLineOne) ? (<><Text>Address Line 1: {addressLineOne}</Text></>) : null}
                  {(addressLineTwo) ? (<><Text>Address Line 2: {addressLineTwo}</Text></>) : null}
                  {(addressLineThree) ? (<><Text>Address Line 3: {addressLineThree}</Text></>) : null}
                  {(addressLineFour) ? (<><Text>Address Line 4: {addressLineFour}</Text>></>) : null}
                </>
              ) : null
            }
            {state ? (
              <>
                <Text>State: {state}</Text>
              </>
            ) : (null)}
            {stateAbbr ? (
              <>
                <Text>State Abbreviation: {stateAbbr}</Text>
              </>
            ) : (null)}
            {postalCode? (
              <>
                <Text>Postal Code: {postalCode}</Text>
              </>
            ) : (null)}
            {email ? (
              <>
                <Text>Email: {email}</Text>
              </>
            ) : (null)}
            {phoneNumber ? (
              <>
                <Text>Phone Number: {phoneNumber}</Text>
              </>
            ) : (null)}
            {website ? (
              <>
                <Text>Website: {website}</Text>
              </>
            ) : (null)}
            {preferredContact ? (
              <>
                <Text>Preferred Contact: {preferredContact}</Text>
              </>
            ) : (null)}
            {intro ? (
              <>
                <Text>Intro: {intro}</Text>
              </>
            ) : (null)}
            {category ? (
              <>
                <Text>Category: {category}</Text>
              </>
            ) : (null)}
            {joinedDate ? (
              <>
                <Text>Member Since: {joinedDate}</Text>
              </>
            ) : (null)}
          </>
        )
      } else { return (
      <>
        <Text tag='p'>List is empty, please</Text>
      </>
    )}
  }

  if (loginRedirect) {
    return(
      <Redirect to='/login' />
    )
  }
  return (
    <>
      <StyledUserInfo>
        {UserInfo(data)}
        <Link address={`/user_update/${id}`} data={data} target='_self'>Edit</Link>
      </StyledUserInfo>
    </>
  )
}

export default UserInfo;
