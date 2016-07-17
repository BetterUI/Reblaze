import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Layout from 'demo/Layout';
import InputsDemo from 'demo/Inputs';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="input" component={InputsDemo} />
    </Route>
  </Router>
), document.getElementById('app'));
