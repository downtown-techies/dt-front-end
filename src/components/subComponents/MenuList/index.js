import React, { useState, useEffect } from 'react';
import theme from '../../../theme/primaryTheme';
import { menuItems } from './items';
import jwt from 'jwt-decode';
import { 
  MenuContainer,
  MenuLink
} from './styles';


const MenuList= (props) => {
  const jwtToken = localStorage.token;

  // const [data, setData] = useState([]);

  // useEffect(() => {
  // }, []);

  const MenuList = (params) => {
    let username
      , accountId
      , accountType;
    const {menuItems, jwtToken} = params;
    
    if (jwtToken && jwtToken.length > 1){
      const token = jwt(jwtToken);
      const {data} = token;
    
      username = data.username;
      accountId = data.accountId;
      accountType = data.accountType
    }

    const loggedIn = jwtToken && jwtToken.length > 1 ? true : false;

    return menuItems.map((item) => {
      if (item) {
        const {
          key, 
          href, 
          flagLogin=false, 
          flagLogout=false, 
          openAccess=true,
          access='user', 
          target='_self', 
          rel='noopener noreferrer',
          linkText,
        } = item;

        if (
          (access !== 'user' && access === accountType)
          || (openAccess && flagLogin !== loggedIn && flagLogout === loggedIn) 
          || (openAccess && flagLogin === loggedIn && flagLogout === loggedIn) 
          || (openAccess && flagLogin !== loggedIn && flagLogout !== loggedIn) 
        ) {
          return (
            <MenuLink
              key={key}
              href={href}
              access={access}
              target={target}
              rel={rel}
             >
              <span>
                {linkText}
              </span>
            </MenuLink>
          )
        } else{return null}
      } else {return null}
    });
  }

  return (
    <MenuContainer>
      {MenuList({menuItems: menuItems, jwtToken: jwtToken})}
    </MenuContainer>
  )
}

export default MenuList;
