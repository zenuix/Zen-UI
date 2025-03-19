import type { Meta, StoryObj } from '@storybook/react';
import './style.css';
import Accordion from './Accordion';

const meta = {
  component: Accordion,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Accordion>
          <Accordion.header className="accordion-header" index={0}>
            아코디언 제목
          </Accordion.header>
          <Accordion.Content className="accordion-content" index={0}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Accordion.Content>
          <Accordion.header className="accordion-header" index={1}>
            아코디언 제목1
          </Accordion.header>
          <Accordion.Content className="accordion-content" index={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Accordion.Content>
        </Accordion>
      </>
    )
  }
};

export const Short: Story = {
  args: {
    children: (
      <>
        <Accordion>
          <Accordion.header className="accordion-header" index={0}>
            아코디언 제목
          </Accordion.header>
          <Accordion.Content className="accordion-content" index={0}>
            Lorem
          </Accordion.Content>
          <Accordion.header className="accordion-header" index={1}>
            아코디언 제목1
          </Accordion.header>
          <Accordion.Content className="accordion-content" index={1}>
            Lorem
          </Accordion.Content>
        </Accordion>
      </>
    )
  }
};
