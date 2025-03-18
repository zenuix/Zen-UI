import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './index';
import { useState } from 'react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs
} as Meta;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const InternalControl: Story = {
  render: () => (
    <Tabs>
      <Tabs.tabGroup>
        <Tabs.tab id="1">1번 탭</Tabs.tab>
        <Tabs.tab id="2">2번 탭</Tabs.tab>
        <Tabs.tab id="3">3번 탭</Tabs.tab>
      </Tabs.tabGroup>
      <Tabs.contentGroup>
        <Tabs.content id="1">1번 탭의 내용</Tabs.content>
        <Tabs.content id="2">2번 탭의 내용</Tabs.content>
        <Tabs.content id="3">3번 탭의 내용</Tabs.content>
      </Tabs.contentGroup>
    </Tabs>
  )
};

export const ExternalControl: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string>('1');
    return (
      <>
        <div>
          <div>외부 제어 테스트 버튼</div>
          <button
            onClick={() => {
              setActiveTab('1');
            }}
          >
            1번 탭 active
          </button>
          <button
            onClick={() => {
              setActiveTab('2');
            }}
          >
            2번 탭 active
          </button>
          <button
            onClick={() => {
              setActiveTab('3');
            }}
          >
            3번 탭 active
          </button>
        </div>
        <Tabs defaultTab="1" tab={activeTab}>
          <Tabs.tabGroup>
            <Tabs.tab id="1">1번 탭</Tabs.tab>
            <Tabs.tab id="2">2번 탭</Tabs.tab>
            <Tabs.tab id="3">3번 탭</Tabs.tab>
          </Tabs.tabGroup>
          <Tabs.contentGroup>
            <Tabs.content id="1">1번 탭의 내용</Tabs.content>
            <Tabs.content id="2">2번 탭의 내용</Tabs.content>
            <Tabs.content id="3">3번 탭의 내용</Tabs.content>
          </Tabs.contentGroup>
        </Tabs>
      </>
    );
  }
};
