import React from 'react';
import Button from 'src/Button';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <Button primary><Link to="/alerts">Alerts</Link></Button>
    <Button secondary><Link to="/bubbles">Bubbles</Link></Button>
    <Button success><Link to="/buttons">Buttons</Link></Button>
    <Button error><Link to="/cards">Cards</Link></Button>
    <Button primary><Link to="/alignment">Alignment</Link></Button>
  </div>
);

export default Home;
