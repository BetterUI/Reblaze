import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Layout from 'demo/Layout';
import InputsDemo from 'demo/Inputs';
import ButtonsDemo from 'demo/Buttons';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="inputs" component={InputsDemo} />
      <Route path="buttons" component={ButtonsDemo} />
    </Route>
  </Router>
), document.getElementById('app'));
