import React from 'react';
import Card from 'src/Card';
import { Link } from 'react-router';
import Button from 'src/Button';

const CardsDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Card>
      <Card.Divider heading>Heading</Card.Divider>
      <Card.Content>Content</Card.Content>
    </Card>
    <Card shadow="high">
      <Card.Divider heading>Heading</Card.Divider>
      <Card.Content>Content</Card.Content>
    </Card>
    <Card shadow="higher">
      <Card.Divider heading>Heading</Card.Divider>
      <Card.Content>Content</Card.Content>
    </Card>
    <Card shadow="highest">
      <Card.Divider heading>Heading</Card.Divider>
      <Card.Content>Content</Card.Content>
    </Card>
    <Card primary>
      <Card.Divider heading>Items</Card.Divider>
      <Card.Item>Card Item</Card.Item>
      <Card.Item>Card Item</Card.Item>
      <Card.Item>Card Item</Card.Item>
      <Card.Item>Card Item</Card.Item>
    </Card>
  </div>
);

export default CardsDemo;
