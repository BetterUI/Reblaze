import React from 'react';
import Badges from 'src/Badges';
import Button from 'src/Button';
import { Link } from 'react-router';

const BadgesDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Badges primary> primary</Badges>
    <Badges secondary> secondary</Badges>
    <Badges success> success</Badges>
    <Badges error> error</Badges>
    <div> Rounded </div>
    <Badges rounded primary> primary</Badges>
    <Badges rounded secondary> secondary</Badges>
    <Badges rounded success> success</Badges>
    <Badges rounded error> error</Badges>
  </div>
);

export default BadgesDemo;
