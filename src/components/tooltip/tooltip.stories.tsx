import { Meta, StoryFn } from '@storybook/react';
import Tooltip from './index';
import './style.css';
import { TooltipProps } from './types';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    animation: { control: 'select', options: ['fade', 'scale', 'none'] },
    offset: { control: 'number' },
    delay: { control: 'number' }
  }
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <Tooltip.Trigger>
      <button>Hover or focus me!</button>
    </Tooltip.Trigger>
    <Tooltip.Content>{args.content}</Tooltip.Content>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: 'This is a tooltip',
  position: 'top',
  animation: 'fade',
  offset: 8,
  delay: 0
};

export const BottomScale = Template.bind({});
BottomScale.args = {
  content: 'Bottom with scale',
  position: 'bottom',
  animation: 'scale',
  offset: 12,
  delay: 200
};
