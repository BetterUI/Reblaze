import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Layout from 'demo/Layout';
import Input from 'demo/Input';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="input" component={Input} />
    </Route>
  </Router>
), document.getElementById('app'));
