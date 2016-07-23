import React from 'react';
import Button from 'src/Button';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <Button primary><Link to="/alerts">Alerts</Link></Button>
    <Button secondary><Link to="/alignment">Alignment</Link></Button>
    <Button success><Link to="/bubbles">Bubbles</Link></Button>
    <Button error><Link to="/buttons">Buttons</Link></Button>
    <Button primary><Link to="/cards">Cards</Link></Button>
    <Button secondary><Link to="/drawers">Drawers</Link></Button>
    <Button success><Link to="/headings">Headings</Link></Button>
    <Button error><Link to="/menus">Menus</Link></Button>
    <Button primary><Link to="/trees">Trees</Link></Button>
  </div>
);

export default Home;
