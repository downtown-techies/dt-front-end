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
} from            'react-router-dom';

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
          <Route          path="/add_account"           component={AddAccount}       exact={true} /> <ProtectedRoute path="/admin"                 component={Admin}             exact={true} />
          <ProtectedRoute path="/admin/ticket_list"     component={TicketList}       exact={true} />
          <ProtectedRoute path="/admin/user_list"       component={UserList}         exact={true} />
          <ProtectedRoute path="/delete_account"        component={DeleteAccount}    exact={true} />
          <Route          path="/login"                 component={Login}            exact={true} />
          <LogoutHandler  path="/logout"                component={LogoutSuccessful} exact={true} />
          <Route          path="/new_ticket"            component={Ticket}           exact={true} />
          <Route          path="/signup"                component={AddUser}          exact={true} />
          <Route          path="/user_update/:id"       component={UpdateUser}       exact={true} />
          <ProtectedRoute path="/user_delete"           component={DeleteUser}       exact={true} />
          <Route          path="/user/account_info/:id" component={UserInfo}         exact={true} />
          <Route          path="/"                      component={Landing}          exact={true} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
