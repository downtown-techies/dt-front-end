import React, { Component } from 'react';
import Landing from '../landing';
import SignUp from '../signup';
import NotFound from '../notFound';

// TODO: add redirect and auth

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
