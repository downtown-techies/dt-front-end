import React from            'react';
import jwt from              'jwt-decode';

// account
import Admin from            '../Admin';
import Landing from          '../Landing';
import Login from            '../Login';
import Reset from            '../Reset';
import LogoutSuccessful from '../LogoutSuccessful';
import NotFound from         '../NotFound';
import UserList from         '../UserList';
import UserInfo from         '../UserInfo';
import AddAccount from       '../forms/AddAccountForm';
import AddUser from          '../forms/AddUserForm';
import DeleteAccount from    '../forms/DeleteAccountForm';
import DeleteUser from       '../forms/DeleteUserForm';
import UpdateUser from       '../forms/UpdateUserForm';

// pages 
import Work from             '../pages/Work';

import {MainContainer} from  './styles.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from                        'react-router-dom';

const jwtToken = localStorage.token; 

let accountType;

if (jwtToken && jwtToken.length > 1){
  const token = jwt(jwtToken);
  const {data} = token;

  accountType = data.accountType
} 

const ProtectedRoute = ({ component: Component, ...rest }) => 
{
  return(
  <Route {...rest} render={(props) => {
      if (jwtToken && jwtToken.length > 1  && accountType === 'admin') {
        return(
          <Component {...props} />
        )
      } else {
        return(
          <Redirect to='/' />
        )
      }
    }
  } />
  )
}

const LogoutHandler = ({ component: Component, ...rest }) => {
  localStorage.setItem('token', '');
  return (
    <Route {...rest} render={(props) => (
      <Component {...props} />
    )} />
  )
}

function Main() {
  return (
    <MainContainer>
      <Router>
        <Switch>
          {/* account/admin related */}
          <Route          path="/add_account"           component={AddAccount}       exact={true} /> 
          <ProtectedRoute path="/admin"                 component={Admin}            exact={true} />
          <ProtectedRoute path="/admin/user_list"       component={UserList}         exact={true} />
          <ProtectedRoute path="/delete_account"        component={DeleteAccount}    exact={true} />
          <Route          path="/login"                 component={Login}            exact={true} />
          <Route          path="/reset"                 component={Reset}            exact={true} />
          <LogoutHandler  path="/logout"                component={LogoutSuccessful} exact={true} />
          <Route          path="/user_update/:id"       component={UpdateUser}       exact={true} />
          <ProtectedRoute path="/user_delete"           component={DeleteUser}       exact={true} />
          <Route          path="/user/account_info/:id" component={UserInfo}         exact={true} />
          {/* pages */}
          <Route          path="/work"                  component={Work}             exact={true} />
          {/* utility*/}
          <Route          path="/signup"                component={AddUser}          exact={true} />
          <Route          path="/"                      component={Landing}          exact={true} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </MainContainer>
  );
}

export default Main;
