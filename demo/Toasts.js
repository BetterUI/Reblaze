import React from 'react';
import { Toasts, Toast } from 'src/Toasts';
import Button from 'src/Button';
import { Link } from 'react-router';

const ToastsDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Toasts position="topright">
      <Toast primary>Toast primary</Toast>
      <Toast secondary>Toast secondary</Toast>
      <Toast success>Toggles success</Toast>
      <Toast error>Toggles error</Toast>
    </Toasts>
    <Toasts position="bottomleft" animate="slow">
      <Toast primary animate="fast">Toast primary</Toast>
      <Toast secondary>Toast secondary</Toast>
      <Toast success>Toggles success</Toast>
      <Toast error>Toggles error</Toast>
    </Toasts>
  </div>
);

export default ToastsDemo;
