import { Meta, StoryFn } from '@storybook/react';
import Modal from './index';
import './style.css';
import { useState } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    withCloseButton: {
      control: 'boolean'
    },
    closeOnBackdropClick: {
      control: 'boolean'
    },
    closeOnEscape: {
      control: 'boolean'
    }
  }
} as Meta;

const DefaultTemplate: StoryFn = () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Modal>
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

export const Default = DefaultTemplate.bind({});

const CustomStateTemplate = () => {
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
      <Modal open={isOpen} onOpenChange={setIsOpen} withCloseButton={false}>
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

const NoBackdropClickTemplate: StoryFn = () => (
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
    <Modal closeOnBackdropClick={false}>
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

const NoEscapeTemplate: StoryFn = () => (
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
    <Modal closeOnEscape={false}>
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

const defaultOpenTemplate: StoryFn = () => (
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
    <Modal defaultOpen={true}>
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

export const DefaultOpen = defaultOpenTemplate.bind({});
