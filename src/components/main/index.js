import React, { Component } from 'react';
import Landing from '../landing';
import NotFound from '../notFound';
import SignUp from '../signup';

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
            <Route exact={true} path="/" component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
