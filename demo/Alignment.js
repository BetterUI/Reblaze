import React from 'react';
import Alignment from 'src/Alignment';
import Button from 'src/Button';
import { Link } from 'react-router';

const AlignmentDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <div>
      <Alignment vertical height="100">vertical</Alignment>
    </div>
    <div>
      <Alignment horizontal height="200">horizontal</Alignment>
    </div>
  </div>
);

export default AlignmentDemo;
