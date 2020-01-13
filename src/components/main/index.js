import React from 'react';
import Landing from '../Landing';
import NotFound from '../NotFound';
import Login from '../Login';
import LogoutSuccessful from '../LogoutSuccessful';
import AddUser from '../forms/AddUserForm';
import DeleteAccount from '../forms/DeleteAccountForm';
import DeleteUser from '../forms/DeleteUserForm';
import AddAccount from '../forms/AddAccountForm';
import jwt from 'jwt-decode';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const jwtToken = localStorage.token; 
let data
  , username
  , accountId
  , accountType;

if (jwtToken.length > 1){
  const token = jwt(jwtToken);
  const {data} = token;

  username = data.username;
  accountId = data.accountId;
  accountType = data.accountType
}

const LoginHandler = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
   jwtToken.length > 1 
      ? <Redirect to='/' />
      : <Component {...props} />
  )} />
)

const ProtectedRoute = ({ component: Component, ...rest }) => 
{
  return(
  <Route {...rest} render={(props) => {
      if (jwtToken.length > 1  && accountType === 'admin') {
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
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/signup" component={AddUser} /> 
          <Route exact={true} path="/addaccount" component={AddAccount} /> 
          <ProtectedRoute exact={true} path="/delete_account" component={DeleteAccount} /> 
          <ProtectedRoute exact={true} path="/delete_user" component={DeleteUser} /> 
          <Route exact={true} path="/login" component={Login} />
          <LogoutHandler exact={true} path="/logout" component={LogoutSuccessful} />
          <Route exact={true} path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
