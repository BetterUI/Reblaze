import React from 'react';
import Menu from 'src/Menu';

const MenusDemo = () => (
  <div>
    <Menu>
      <Menu.Item>Hello world 1</Menu.Item>
      <Menu.Item>Hello world 2</Menu.Item>
      <Menu.Item>Hello world 3</Menu.Item>
      <Menu.Item divider>Hello world 1</Menu.Item>
      <Menu.Item disabled>Disabled</Menu.Item>
      <Menu.Item active>Active</Menu.Item>
    </Menu>
    <br />
    <br />
    <Menu>
      <Menu.Check>Hello world 1</Menu.Check>
      <Menu.Check>Hello world 2</Menu.Check>
      <Menu.Check>Hello world 3</Menu.Check>
      <Menu.Check divider>Hello world 1</Menu.Check>
      <Menu.Check disabled>Disabled</Menu.Check>
    </Menu>
  </div>
);

export default MenusDemo;
