import React, { Component } from 'react';
import styled from '../../theme';
import Landing from '../landing';
import NotFound from '../notFound';

// TODO: add redirect and auth

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const StyledMain = styled.div`
`;

class Main extends Component {
  render() {
    return (
      <StyledMain>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ StyledMain>
    );
  }
}

export default Main;
