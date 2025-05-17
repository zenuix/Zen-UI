import { Meta, StoryFn } from '@storybook/react';
import Dropdown from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as Meta;

const DefaultTemplate: StoryFn = () => {
  return (
    <Dropdown>
      <Dropdown.trigger>Trigger Click me</Dropdown.trigger>
      <Dropdown.content>
        <Dropdown.group>
          <Dropdown.item>Item 1</Dropdown.item>
          <Dropdown.item>Item 2</Dropdown.item>
          <Dropdown.item>Item 3</Dropdown.item>
          <Dropdown.separator />
          <Dropdown.item>Item 4</Dropdown.item>
        </Dropdown.group>
      </Dropdown.content>
    </Dropdown>
  );
};
export const Default = DefaultTemplate.bind({});

const ElementTemplate: StoryFn = () => {
  return (
    <Dropdown>
      <Dropdown.trigger>Trigger Click me</Dropdown.trigger>
      <Dropdown.content>
        <Dropdown.group as="ul">
          <Dropdown.item>Item 1</Dropdown.item>
          <Dropdown.item>Item 2</Dropdown.item>
        </Dropdown.group>
        <Dropdown.group as="ol">
          <Dropdown.item>Item 1</Dropdown.item>
          <Dropdown.item>Item 2</Dropdown.item>
        </Dropdown.group>
        <Dropdown.group as="div">
          <Dropdown.item as="a">Item Anchor</Dropdown.item>
          <Dropdown.item as="div">Item Div</Dropdown.item>
          <Dropdown.item as="button">Item Button</Dropdown.item>
        </Dropdown.group>
      </Dropdown.content>
    </Dropdown>
  );
};
export const Element = ElementTemplate.bind({});
