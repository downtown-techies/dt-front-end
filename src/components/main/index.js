import React from 'react';
import Landing from '../Landing';
import NotFound from '../NotFound';
import Login from '../Login';
import AddUser from '../forms/AddUserForm';
import AddAccount from '../forms/AddAccountForm';
import jwt from 'jwt-decode';

import {
  BrowserRouter as Router,
  Route,
  Switch,
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

// <Route exact={true} path="/nested_admin/add_meetup" component={AddMeetup} /> 
// <Route exact={true} path="/delete" component={DeleteUser} /> 

function Main() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/signup" component={AddUser} /> 
          <Route exact={true} path="/addaccount" component={AddAccount} /> 
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
