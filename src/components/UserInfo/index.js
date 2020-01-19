import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Text from '../shared/Text';
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
      console.log('inside');
        const {
          id, account_id, active, address_line_1: addressLineOne, address_line_2: addressLineTwo, 
          address_line_3: addressLineThree, address_line_4: addressLineFour, city, state,
          first_name: firstName, last_name: lastName, email, type, state_abbr, 
          postal_code: postalCode, preferred_contact: preferredContact, ph_number: phoneNumber,
          website, opt_in: optIn, follow_up: followUp, intro_description: intro,
          location, createdAt, gig_category: category
        } = data;

        const name = `${firstName} ${lastName}`;

        console.log(name);
        console.log(data);

        return (
          <UserCard key={`${name}-${id}`}>
            <Text tag='h3' textStyle='big' color='white'>{name ? name : 'empty'}</Text>
            {category ? (
              <>
                <Text color='white'>Category: {category}</Text>
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
      </StyledUserInfo>
    </>
  )
}

export default UserInfo;
