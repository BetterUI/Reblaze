import React from 'react';
import Card from 'lib/Card';

const CardsDemo = () => (
  <div>
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
    <Card>
      <Card.Divider heading>Items</Card.Divider>
      <Card.Item>Card Item</Card.Item>
      <Card.Item>Card Item</Card.Item>
      <Card.Item>Card Item</Card.Item>
      <Card.Item>Card Item</Card.Item>
    </Card>
  </div>
);

export default CardsDemo;
