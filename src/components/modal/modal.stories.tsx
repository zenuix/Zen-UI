import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal from './index';
import './style.css';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    withCloseButton: {
      description:
        'Determines whether the modal displays a close button. When true, a button for closing the modal is rendered.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    closeOnBackdropClick: {
      description:
        'Enables closing the modal when clicking on the backdrop. If true, clicking outside the modal content triggers the close action.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    closeOnEscape: {
      description:
        'Allows the modal to be dismissed by pressing the Escape key. When true, the modal closes upon Escape key press.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    defaultOpen: {
      description:
        'Specifies if the modal should be open by default on initial render. If true, the modal is visible immediately upon mounting.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    open: {
      description:
        'Controls the modal visibility externally. Use this prop to programmatically open or close the modal.'
    },
    onOpenChange: {
      description:
        "Callback invoked when the modal's open state changes. Accepts either a setState function or a custom handler."
    }
  },
  args: {
    withCloseButton: true,
    closeOnBackdropClick: true,
    closeOnEscape: true,
    defaultOpen: false
  }
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => (
  <div
    style={{
      width: '100%',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Modal {...args}>
      <Modal.trigger>Open Modal</Modal.trigger>
      <Modal.container>
        <Modal.overlay />
        <Modal.content>
          <Modal.header>
            <Modal.title>Payment successful</Modal.title>
            <Modal.description className="text-right">
              Your payment has been successfully submitted. <br />
              We’ve sent you an email with all of the details of your order.
            </Modal.description>
          </Modal.header>
          <div></div>
          <Modal.footer></Modal.footer>
        </Modal.content>
      </Modal.container>
    </Modal>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  // export default에 정의된 기본 args 사용
};

const CustomStateTemplate: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Modal {...args} open={isOpen} onOpenChange={setIsOpen}>
        <Modal.trigger>Open Modal</Modal.trigger>
        <Modal.container>
          <Modal.overlay />
          <Modal.content>
            <Modal.header>
              <Modal.title>Payment successful</Modal.title>
              <Modal.description>
                Your payment has been successfully submitted. <br />
                We’ve sent you an email with all of the details of your order.
              </Modal.description>
            </Modal.header>
            <div></div>
            <Modal.footer>
              <button type="button" onClick={() => setIsOpen(false)}>
                userCustom Close
              </button>
            </Modal.footer>
          </Modal.content>
        </Modal.container>
      </Modal>
    </div>
  );
};

export const CustomState = CustomStateTemplate.bind({});
CustomState.args = {
  withCloseButton: false
};

const NoBackdropClickTemplate: StoryFn<typeof Modal> = (args) => (
  <div
    style={{
      width: '100%',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Modal {...args}>
      <Modal.trigger>Open Modal</Modal.trigger>
      <Modal.container>
        <Modal.overlay />
        <Modal.content>
          <Modal.header>
            <Modal.title>Payment successful</Modal.title>
            <Modal.description>
              Your payment has been successfully submitted. <br />
              We’ve sent you an email with all of the details of your order.
            </Modal.description>
          </Modal.header>
          <div></div>
          <Modal.footer></Modal.footer>
        </Modal.content>
      </Modal.container>
    </Modal>
  </div>
);

export const NoBackdropClick = NoBackdropClickTemplate.bind({});
NoBackdropClick.args = {
  closeOnBackdropClick: false
};

const NoEscapeTemplate: StoryFn<typeof Modal> = (args) => (
  <div
    style={{
      width: '100%',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Modal {...args}>
      <Modal.trigger>Open Modal</Modal.trigger>
      <Modal.container>
        <Modal.overlay />
        <Modal.content>
          <Modal.header>
            <Modal.title>Payment successful</Modal.title>
            <Modal.description>
              Your payment has been successfully submitted. <br />
              We’ve sent you an email with all of the details of your order.
            </Modal.description>
          </Modal.header>
          <div></div>
          <Modal.footer></Modal.footer>
        </Modal.content>
      </Modal.container>
    </Modal>
  </div>
);

export const NoEscape = NoEscapeTemplate.bind({});
NoEscape.args = {
  closeOnEscape: false
};

const DefaultOpenTemplate: StoryFn<typeof Modal> = (args) => (
  <div
    style={{
      width: '100%',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Modal {...args}>
      <Modal.trigger>Open Modal</Modal.trigger>
      <Modal.container>
        <Modal.overlay />
        <Modal.content>
          <Modal.header>
            <Modal.title>Payment successful</Modal.title>
            <Modal.description>
              Your payment has been successfully submitted. <br />
              We’ve sent you an email with all of the details of your order.
            </Modal.description>
          </Modal.header>
          <div></div>
          <Modal.footer></Modal.footer>
        </Modal.content>
      </Modal.container>
    </Modal>
  </div>
);

export const DefaultOpen = DefaultOpenTemplate.bind({});
DefaultOpen.args = {
  defaultOpen: true
};
