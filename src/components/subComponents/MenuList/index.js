import React from 'react';
import { menuItems } from './items';
import jwt from 'jwt-decode';
import { 
  MenuContainer,
  MenuLink
} from './styles';

let id;

const MenuList= (props) => {
  const jwtToken = localStorage.token;

  const MenuList = (params) => {
    let accountType;
    const {menuItems, jwtToken} = params;
    
    if (jwtToken && jwtToken.length > 1){
      const token = jwt(jwtToken);
      const {data} = token;
    
      accountType = data.accountType
      id = data.id;
    }
    const loggedIn = jwtToken && jwtToken.length > 1 ? true : false;

    return menuItems.map((item) => {
      if (item) {
        const {
          key, 
          hrefRoot, 
          flagLogin=false, 
          flagLogout=false, 
          openAccess=true,
          access='user', 
          target='_self', 
          rel='noopener noreferrer',
          linkText,
        } = item;

        let href = hrefRoot;

        if(key==='userInfo'){
          href = `${hrefRoot}/${id}`
        }

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
