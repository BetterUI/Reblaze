import React from 'react';
import Bubble from 'src/Bubble';

const BubblesDemo = () => (
  <div>
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
  </div>
);

export default BubblesDemo;
