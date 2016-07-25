import React from 'react';
import Tabs from 'src/Tabs';
import Button from 'src/Button';
import { Link } from 'react-router';

const TabsDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Tabs>
      <Tabs.Headings>
        <Tabs.Heading active> Tab 1 </Tabs.Heading>
        <Tabs.Heading> Tab 2 </Tabs.Heading>
      </Tabs.Headings>
      <Tabs.Tab active>This is tab one</Tabs.Tab>
      <Tabs.Tab>This is tab two</Tabs.Tab>
    </Tabs>
  </div>
);

export default TabsDemo;
