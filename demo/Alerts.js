import React from 'react';
import Alert from 'lib/Alert';

const AlertsDemo = () => (
  <div>
    <Alert closable>Alert</Alert>
    <Alert primary closable>Alert</Alert>
    <Alert secondary closable>Alert</Alert>
    <Alert success closable>Alert</Alert>
    <Alert error closable>Alert</Alert>
  </div>
);

export default AlertsDemo;
