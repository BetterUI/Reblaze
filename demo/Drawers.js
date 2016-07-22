import React from 'react';
import Drawer from 'src/Drawer';
import Heading from 'src/Heading';
import Menu from 'src/Menu';

const DrawersDemo = () => (
  <div>
    <Drawer>
      <Heading size="small">Menu</Heading>
      <Menu>
        <Menu.Item>Hello world 1</Menu.Item>
        <Menu.Item>Hello world 2</Menu.Item>
        <Menu.Item>Hello world 3</Menu.Item>
        <Menu.Item divider>Hello world 1</Menu.Item>
        <Menu.Item disabled>Disabled</Menu.Item>
        <Menu.Item active>Active</Menu.Item>
      </Menu>
      <Drawer.Body>
        This is body
      </Drawer.Body>
    </Drawer>
  </div>
);

export default DrawersDemo;
