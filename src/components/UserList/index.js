import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Text from '../shared/Text';
import theme from '../../theme/primaryTheme';
import { 
  ListContainer,
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
          name, postal_code: postalCode,
          gig_needs: needs, gig_category: category, skills
        } = user;

        return (
          <UserCard key={`${user.name}-${user.id}`}>
            <Text tag='h3' textStyle='big'>{name ? name : 'empty'}</Text>
            {postalCode ? (
              <>
                <Text>Postal Code: {postalCode}</Text>
              </>
            ) : (null)}
            {skills ? (
              <>
                <Text>Skills: {skills}</Text>
              </>
            ) : (null)}
            {category ? (
              <>
                <Text>Category: {category}</Text>
              </>
            ) : (null)}
            {needs ? (
              <>
                <Text>Needs: {needs}</Text>
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
