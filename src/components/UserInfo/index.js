import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Text from '../shared/Text';
import Link from '../shared/Link';
import theme from '../../theme/primaryTheme';
import { 
  ListContainer,
  UserCard,
  StyledUserInfo,
  HeaderWrapper, 
} from './styles';

const jwtToken = localStorage.token;

const UserInfo= (props) => {
  const [data, setData] = useState({});
  const [accountId, setAccountid] = useState(null);

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
        const {account_id: accountId} = response.data;

        if(accountId !== null){setAccountid(accountId)}
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
          id, account_id: accountId, active, address_line_1: addressLineOne, 
          address_line_2: addressLineTwo, address_line_3: addressLineThree, 
          address_line_4: addressLineFour, city, state, first_name: firstName, 
          last_name: lastName, email, state_abbr: stateAbbr, postal_code: postalCode, 
          preferred_contact: preferredContact, ph_number: phoneNumber, website, 
          opt_in: optIn, follow_up: followUp, intro_description: intro, location, 
          createdAt, gig_category: category, type
        } = data;


        const name = `${firstName} ${lastName}`;

        const address = (addressLineOne !== null || city !== null || stateAbbr !== null || postalCode !== null) ? 
          `${addressLineOne} ${city}, ${stateAbbr} ${postalCode}` : null;

        return (
          <UserCard key={`${name}-${id}`}>
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
                  {(addressLineOne) ? (<><Text color='white'>Address Line 1: {addressLineOne}</Text><br/></>) : null}
                  {(addressLineTwo) ? (<><Text color='white'>Address Line 2: {addressLineTwo}</Text><br/></>) : null}
                  {(addressLineThree) ? (<><Text color='white'>Address Line 3: {addressLineThree}</Text><br/></>) : null}
                  {(addressLineFour) ? (<><Text color='white'>Address Line 4: {addressLineFour}</Text><br/></>) : null}
                </>
              ) : null
            }
            {postalCode? (
              <>
                <Text color='white'>Postal Code: {postalCode}</Text>
              </>
            ) : (null)}
            {createdAt ? (
              <>
                <Text color='white'>Member Since: {createdAt}</Text>
              </>
            ) : (null)}
          </UserCard>
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
        <Link address={`/user_update/${accountId}`} color='white' target='_self'>Foo</Link>
      </StyledUserInfo>
    </>
  )
}

export default UserInfo;
