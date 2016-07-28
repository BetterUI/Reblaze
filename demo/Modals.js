import React from 'react';
import Modals from 'src/Modals';
import Button from 'src/Button';
import { Link } from 'react-router';

const ModalsDemo = () => (
  <div>
    <Modals highest >
      <Modals.Header>
        Modal heading
      </Modals.Header>
      <Modals.Body>
        This is the modal body
      </Modals.Body>
      <Modals.Footer>
        <Button primary>Save</Button>
        <Button error><Link to="/home">Cancel</Link></Button>
      </Modals.Footer>
    </Modals>
    <Modals highest animate="slow">
      <Modals.Header>
        Modal heading
      </Modals.Header>
      <Modals.Body>
        This is the modal body
      </Modals.Body>
      <Modals.Footer block>
        <Button primary>Save</Button>
        <Button error><Link to="/home">Cancel</Link></Button>
      </Modals.Footer>
    </Modals>
  </div>
);

export default ModalsDemo;
