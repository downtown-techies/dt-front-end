import React from            'react';
import jwt from              'jwt-decode';

import Admin from            '../Admin';
import Landing from          '../Landing';
import Login from            '../Login';
import LogoutSuccessful from '../LogoutSuccessful';
import NotFound from         '../NotFound';
import UserList from         '../UserList';
import UserInfo from         '../UserInfo';
import TicketList from       '../TicketList';
import AddAccount from       '../forms/AddAccountForm';
import AddUser from          '../forms/AddUserForm';
import DeleteAccount from    '../forms/DeleteAccountForm';
import DeleteUser from       '../forms/DeleteUserForm';
import Ticket from           '../forms/TicketForm';
import UpdateUser from       '../forms/UpdateUserForm';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

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
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/add_account" component={AddAccount} /> 
          <ProtectedRoute exact={true} path="/admin" component={Admin} /> 
          <ProtectedRoute exact={true} path="/admin/ticket_list" component={TicketList} /> 
          <ProtectedRoute exact={true} path="/admin/user_list" component={UserList} /> 
          <ProtectedRoute exact={true} path="/delete_account" component={DeleteAccount} /> 
          <Route exact={true} path="/login" component={Login} />
          <LogoutHandler exact={true} path="/logout" component={LogoutSuccessful} />
          <Route exact={true} path="/new_ticket" component={Ticket} /> 
          <Route exact={true} path="/signup" component={AddUser} /> 
          <Route exact={true} path="/user_update/:id" component={UpdateUser} /> 
          <ProtectedRoute exact={true} path="/user_delete" component={DeleteUser} /> 
          <Route exact={true} path="/user/account_info/:id" component={UserInfo} /> 
          <Route exact={true} path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
