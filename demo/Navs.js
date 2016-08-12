import React from 'react';
import Navs from 'src/Navs';

const TreesDemo = () => (
  <div>
    <Navs>
      <Navs.Content>My App</Navs.Content>
      <Navs.Item success active>Home</Navs.Item>
      <Navs.Item primary>News</Navs.Item>
      <Navs.Item secondary>News</Navs.Item>
      <Navs.Item error>Help</Navs.Item>
    </Navs>
    <Navs inline animate="slow">
      <Navs.Content>My App</Navs.Content>
      <Navs.Item success active>Home</Navs.Item>
      <Navs.Item primary>News</Navs.Item>
      <Navs.Item secondary>News</Navs.Item>
      <Navs.Item error>Help</Navs.Item>
    </Navs>
  </div>
);

export default TreesDemo;
