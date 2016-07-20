import React from 'react';
import Alert from 'src/Alert';
import Button from 'src/Button';
import { Link } from 'react-router';

const AlertsDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Alert closable>Alert</Alert>
    <Alert primary closable>Alert primary</Alert>
    <Alert secondary closable>Alert secondary</Alert>
    <Alert success closable>Alert success</Alert>
    <Alert error closable>Alert error</Alert>
    <div> Animations </div>
    <Alert closable animate animateOptions="slow">Alert animate slow</Alert>
    <Alert closable animate animateOptions="fast">Alert animate fast</Alert>
    <Alert closable animate animateOptions="left">Alert animate left</Alert>
  </div>
);

export default AlertsDemo;
