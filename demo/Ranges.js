import React from 'react';
import Ranges from 'src/Ranges';
import Button from 'src/Button';
import { Link } from 'react-router';

const RangesDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <div>Basic Range</div>
    <Ranges />
    <div>Color Range</div>
    <Ranges primary />
    <Ranges secondary />
    <Ranges success />
    <Ranges error />
    <Ranges disabled />
    <div>Animations</div>
    <Ranges primary animate="slow" />
  </div>
);

export default RangesDemo;
