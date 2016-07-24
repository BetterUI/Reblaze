import React from 'react';
import Alignment from 'src/Alignment';
import Button from 'src/Button';
import { Link } from 'react-router';

const AlignmentDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <div style={{ background: '#cccccc' }}>
      <Alignment vertical height="100" style={{ color: 'green' }}>vertical</Alignment>
    </div>
    <div style={{ background: '#d0d7ec' }}>
      <Alignment horizontal height="200">horizontal</Alignment>
    </div>
  </div>
);

export default AlignmentDemo;
