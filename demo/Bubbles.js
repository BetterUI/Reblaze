import React from 'react';
import Bubble from 'src/Bubble';
import Button from 'src/Button';
import { Link } from 'react-router';

const BubblesDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <div>
      <Bubble position="up">Up</Bubble>
    </div>
    <div>
      <Bubble position="right">Right</Bubble>
    </div>
    <div>
      <Bubble position="down">Down</Bubble>
    </div>
    <div>
      <Bubble position="left">Left</Bubble>
    </div>
    <div> animate </div>
    <div>
      <Bubble position="left" animate="slow">slow</Bubble>
    </div>
    <div>
      <Bubble position="right" animate="slow left">slow left</Bubble>
    </div>
    <div>
      <Bubble position="right" animate="slow right">slow right</Bubble>
    </div>
    <div>
      <Bubble position="down" animate="fast right">fast right</Bubble>
    </div>
  </div>
);

export default BubblesDemo;
