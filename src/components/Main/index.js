import React from 'react';
import Landing from '../Landing';
import NotFound from '../NotFound';
import Login from '../Login';
import UserList from '../UserList';
import TicketList from '../TicketList';
import LogoutSuccessful from '../LogoutSuccessful';
import AddUser from '../forms/AddUserForm';
import Ticket from '../forms/TicketForm';
import DeleteAccount from '../forms/DeleteAccountForm';
import DeleteUser from '../forms/DeleteUserForm';
import Admin from '../Admin';
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

if (jwtToken && jwtToken.length > 1){
  const token = jwt(jwtToken);
  const {data} = token;

  username = data.username;
  accountId = data.accountId;
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
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/add_account" component={AddAccount} /> 
          <ProtectedRoute exact={true} path="/admin" component={Admin} /> 
          <ProtectedRoute exact={true} path="/admin/user_list" component={UserList} /> 
          <ProtectedRoute exact={true} path="/delete_account" component={DeleteAccount} /> 
          <ProtectedRoute exact={true} path="/delete_user" component={DeleteUser} /> 
          <Route exact={true} path="/login" component={Login} />
          <LogoutHandler exact={true} path="/logout" component={LogoutSuccessful} />
          <Route exact={true} path="/new_ticket" component={Ticket} /> 
          <Route exact={true} path="/signup" component={AddUser} /> 
          <ProtectedRoute exact={true} path="/admin/ticket_list" component={TicketList} /> 
          <Route exact={true} path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
