import React from 'react';
import Address from 'src/Address';
import Button from 'src/Button';
import { Link } from 'react-router';

const AddressDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Address>
      <Address.Heading>The Simpsons </Address.Heading>
      742 Evergreen Terrace,<br />
      Springfield,<br />
      80085,<br />
      USA <br />
    </Address>
  </div>
);

export default AddressDemo;
