import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Link from '../shared/Link';
import Text from '../shared/Text';
import theme from '../../theme/primaryTheme';
import { 
  ListContainer,
  ImageContainer,
  UserCard,
  StyledUserList,
  HeaderWrapper, 
} from './styles';

const jwtToken = localStorage.token;

const UserList= (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    apiRequest.get(
      `${apiBaseUrl}/users`,
      jwtToken
    )
    .then(function (response) {
      if (response.status === 200){
        console.log(response);
        setData(...data, response.data);
      } else {
        console.log(response.status);
      };
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const UserList = (data) => {
    if ( data.length > 0 ) {
      const list = data.map((user) => {
        const {
          name, account_id, postal_code: postalCode, id,
          gig_needs: needs, gig_category: category, skills
        } = user;

        return (
          <UserCard key={`${user.name}-${user.id}`}>
            <Text tag='h3' textStyle='big' color='white'>{name ? name : 'empty'}</Text>
            {postalCode ? (
              <>
                <Text color='white'>Postal Code: {postalCode}</Text>
              </>
            ) : (null)}
            {skills ? (
              <>
                <Text color='white'>Skills: {skills}</Text>
              </>
            ) : (null)}
            {category ? (
              <>
                <Text color='white'>Category: {category}</Text>
              </>
            ) : (null)}
            {needs ? (
              <>
                <Text color='white'>Needs: {needs}</Text>
              </>
            ) : (null)}
          </UserCard>
        )
      });

      return (
        <ListContainer>
          {list}
        </ListContainer>
      )
    } else { return (
      <>
        <Text tag='p'>List is empty, please</Text>
      </>
    )}
  }

  return (
    <>
      <StyledUserList>
        <HeaderWrapper>
          <Text tag='h3' color={theme.colors.accent} textStyle='callToAction'>Users</Text> 
        </ HeaderWrapper>
        {UserList(data)}
      </StyledUserList>
    </>
  )
}

export default UserList;
