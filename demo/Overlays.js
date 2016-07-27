import React, { Component } from 'react';
import Overlays from 'src/Overlays';
import Button from 'src/Button';
import { Link } from 'react-router';

class OverlaysDemo extends Component {

  componentDidMount() {
    this.demo();
  }

  demo() {
    document.querySelector('.c-overlay').classList.remove('a-overlay');
    setTimeout(function () {
      document.querySelector('.c-overlay').classList.add('a-overlay');
    }, 2000);
  }

  render() {
    return (
      <div>
        <Button primary><Link to="/home">Home</Link></Button>
        <div>
          <Overlays dismissable animate="slow" />
        </div>
      </div>
    );
  }
}

export default OverlaysDemo;
