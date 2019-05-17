import React from 'react';
import Landing from '../landing';
import NotFound from '../notFound';
import UserSignup from '../userSignup';
// import DeleteUser from '../deleteUser';
// import AddMeetup from '../addMeetup';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// <Route exact={true} path="/nested_admin/add_meetup" component={AddMeetup} /> 
// <Route exact={true} path="/delete" component={DeleteUser} /> 

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
