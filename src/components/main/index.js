import React, { useState, useEffect } from 'react';
import Landing from '../landing';
import NotFound from '../notFound';
import SignUp from '../signup';
import UserSignup from '../userSignup';
import AddMeetup from '../addMeetup';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// <Route exact={true} path="/nested_admin/add_meetup" component={AddMeetup} /> 

function Main() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/signup" component={UserSignup} /> 
          <Route exact={true} path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
