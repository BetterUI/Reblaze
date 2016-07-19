import React from 'react';
import Button from 'src/Button';
import ButtonGroup from 'src/ButtonGroup';

const ButtonsDemo = () => (
  <div>
    <Button>Button</Button>
    <Button href="#">Link</Button>
    <Button primary>Button</Button>
    <Button secondary>Button</Button>
    <Button success>Button</Button>
    <Button error>Button</Button>
    <Button ghost primary>Button</Button>
    <Button ghost secondary>Button</Button>
    <Button ghost success>Button</Button>
    <Button ghost error>Button</Button>
    <Button size="xsmall">Button</Button>
    <Button size="small">Button</Button>
    <Button size="medium">Button</Button>
    <Button size="large">Button</Button>
    <Button size="super">Button</Button>
    <Button rounded block>Button</Button>
    <ButtonGroup>
      <Button primary>Button</Button>
      <Button secondary>Button</Button>
    </ButtonGroup>
    <ButtonGroup rounded>
      <Button primary rounded>Button</Button>
      <Button secondary rounded>Button</Button>
    </ButtonGroup>
  </div>
);

export default ButtonsDemo;
