import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Layout from 'demo/Layout';
import AlertsDemo from 'demo/Alerts';
import BubblesDemo from 'demo/Bubbles';
import ButtonsDemo from 'demo/Buttons';
import CardsDemo from 'demo/Cards';
import InputsDemo from 'demo/Inputs';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="alerts" component={AlertsDemo} />
      <Route path="bubbles" component={BubblesDemo} />
      <Route path="buttons" component={ButtonsDemo} />
      <Route path="cards" component={CardsDemo} />
      <Route path="inputs" component={InputsDemo} />
    </Route>
  </Router>
), document.getElementById('app'));
