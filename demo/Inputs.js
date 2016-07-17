import React from 'react';
import Input from 'lib/Input';
import FieldGroup from 'lib/FieldGroup';
import Checkbox from 'lib/Checkbox';
import FormElement from 'lib/FormElement';
import FieldSet from 'lib/FieldSet';

const InputsDemo = () => (
  <div>
    <Input placeholder="input" />
    <Input placeholder="success" success />
    <Input placeholder="error" error />
    <Input placeholder="xsmall" size="xsmall" />
    <Input placeholder="small" size="small" />
    <Input placeholder="medium" size="medium" />
    <Input placeholder="large" size="large" />
    <Input placeholder="xlarge" size="xlarge" />
    <Input placeholder="super" size="super" />
    <FieldGroup>
      <Input placeholder="input" />
      <Input multiline placeholder="multiline" />
      <Input placeholder="input" />
    </FieldGroup>
    <FieldGroup inline>
      <Input placeholder="input" />
      <Input placeholder="input" />
      <Input placeholder="input" />
    </FieldGroup>
    <Checkbox>Tick the box</Checkbox>
    <Checkbox success>Tick the box</Checkbox>
    <Checkbox error>Tick the box</Checkbox>
    <Checkbox type="radio">Tick the box</Checkbox>
    <FormElement>
      <FormElement.Label>Nickname:</FormElement.Label>
      <Input placeholder="Nickname" />
      <FormElement.Hint>Nickname is your unofficial name</FormElement.Hint>
    </FormElement>
    <FieldSet>
      <FieldSet.Legend>Please complete the form:</FieldSet.Legend>
      <FormElement>
        <FormElement.Label>Address line 1:</FormElement.Label>
        <Input placeholder="Address line 1" />
      </FormElement>
    </FieldSet>
  </div>
);

export default InputsDemo;
