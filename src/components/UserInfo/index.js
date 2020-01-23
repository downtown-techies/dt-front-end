import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Text from '../shared/Text';
import Link from '../shared/Link';
import theme from '../../theme/primaryTheme';
import jwt from 'jwt-decode';
import { 
  StyledUserInfo,
  HeaderWrapper, 
} from './styles';

const UserInfo= (props) => {
  const [data, setData] = useState({});
  const [id, setId] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    let id;
    const jwtToken = localStorage.token;
    const token = jwt(jwtToken);
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

        const name = `${firstName} ${lastName}`;

        return (
          <>
            <Text tag='h3' textStyle='big' color='white'>{name ? name : 'empty'}</Text>
            {category ? (
              <>
                <Text color='white'>Category: {category}</Text>
              </>
            ) : (null)}
            {accountId ? (
              <>
                <Text color='white'>AccountId: {`1005${accountId}`}</Text>
              </>
            ) : (null)}
            {( addressLineOne || addressLineTwo || addressLineThree || addressLineFour) ? 
              (
                <>
                  {(addressLineOne) ? (<><Text color='white'>Address Line 1: {addressLineOne}</Text></>) : null}
                  {(addressLineTwo) ? (<><Text color='white'>Address Line 2: {addressLineTwo}</Text></>) : null}
                  {(addressLineThree) ? (<><Text color='white'>Address Line 3: {addressLineThree}</Text></>) : null}
                  {(addressLineFour) ? (<><Text color='white'>Address Line 4: {addressLineFour}</Text>></>) : null}
                </>
              ) : null
            }
            {state ? (
              <>
                <Text color='white'>State: {state}</Text>
              </>
            ) : (null)}
            {stateAbbr ? (
              <>
                <Text color='white'>State Abbreviation: {stateAbbr}</Text>
              </>
            ) : (null)}
            {postalCode? (
              <>
                <Text color='white'>Postal Code: {postalCode}</Text>
              </>
            ) : (null)}
            {email ? (
              <>
                <Text color='white'>Email: {email}</Text>
              </>
            ) : (null)}
            {phoneNumber ? (
              <>
                <Text color='white'>Phone Number: {phoneNumber}</Text>
              </>
            ) : (null)}
            {website ? (
              <>
                <Text color='white'>Website: {website}</Text>
              </>
            ) : (null)}
            {preferredContact ? (
              <>
                <Text color='white'>Preferred Contact: {preferredContact}</Text>
              </>
            ) : (null)}
            {intro ? (
              <>
                <Text color='white'>Intro: {intro}</Text>
              </>
            ) : (null)}
            {category ? (
              <>
                <Text color='white'>Category: {category}</Text>
              </>
            ) : (null)}
            {createdAt ? (
              <>
                <Text color='white'>Member Since: {createdAt}</Text>
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

  return (
    <>
      <StyledUserInfo>
        <HeaderWrapper>
          <Text tag='h3' color={theme.colors.accent} textStyle='callToAction'>Users</Text> 
        </ HeaderWrapper>
        {UserInfo(data)}
        <Link address={`/user_update/${id}`} data={data} color='white' target='_self'>Edit</Link>
      </StyledUserInfo>
    </>
  )
}

export default UserInfo;
