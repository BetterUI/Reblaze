import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Layout from 'demo/Layout';
import AlertsDemo from 'demo/Alerts';
import BubblesDemo from 'demo/Bubbles';
import ButtonsDemo from 'demo/Buttons';
import CardsDemo from 'demo/Cards';
import InputsDemo from 'demo/Inputs';
import HomeDemo from 'demo/Home';
import AlignmentDemo from 'demo/Alignment';

export default (
  <Route path="/" component={Layout}>
    <IndexRedirect to="/home" />
    <Route path="home" component={HomeDemo} />
      <Route path="alerts" component={AlertsDemo} />
      <Route path="bubbles" component={BubblesDemo} />
      <Route path="buttons" component={ButtonsDemo} />
      <Route path="cards" component={CardsDemo} />
      <Route path="inputs" component={InputsDemo} />
      <Route path="alignment" component={AlignmentDemo} />
  </Route>
);
