import React from 'react';
import Toggles from 'src/Toggles';
import Button from 'src/Button';
import { Link } from 'react-router';

const AlertsDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Toggles checked>Toggles</Toggles>
    <Toggles checked primary>Toggles primary</Toggles>
    <Toggles checked secondary>Toggles secondary</Toggles>
    <Toggles success>Toggles success</Toggles>
    <Toggles disabled error>Toggles error</Toggles>
    <div> Animations </div>
    <Toggles animate="slow">Toggles animate slow</Toggles>
    <Toggles animate="fast">Toggles animate fast</Toggles>
  </div>
);

export default AlertsDemo;
