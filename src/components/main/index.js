import React, { useState, useEffect } from 'react';
import Landing from '../landing';
import NotFound from '../notFound';
import SignUp from '../signup';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//     {/* <Route exact={true} path="/signup" component={SignUp} /> */}

function Main() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
