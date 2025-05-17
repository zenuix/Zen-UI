import { Meta, StoryFn } from '@storybook/react';
import Pagination from './index';
import './style.css';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      description: '전체 페이지 수',
      control: { type: 'number' },
      defaultValue: 10
    },
    pageLimit: {
      description: '한 번에 보여줄 페이지 버튼 개수',
      control: { type: 'number' },
      defaultValue: 5
    },
    onPageChange: {
      description: '페이지가 변경될 때 호출되는 콜백 함수',
      action: '페이지 변경됨'
    }
  },
  args: {
    totalPages: 10,
    pageLimit: 5
  }
} as Meta<typeof Pagination>;

// 공통 템플릿
const Template: StoryFn<typeof Pagination> = (args) => (
  <Pagination {...args}>
    <Pagination.content>
      <Pagination.previous />
      <Pagination.ellipsis isLeading={true} />
      <Pagination.pages />
      <Pagination.ellipsis isLeading={false} />
      <Pagination.next />
    </Pagination.content>
  </Pagination>
);

// 기본 스토리
export const Default = Template.bind({});

// 페이지가 3개 이하인 경우 (ellipsis 없음)
export const ShortPagination = Template.bind({});
ShortPagination.args = {
  totalPages: 3
};

// 페이지가 많고 pageLimit이 작을 때
export const ManyPages = Template.bind({});
ManyPages.args = {
  totalPages: 20,
  pageLimit: 3
};

// pageLimit 없이 전체 페이지를 모두 보여주는 경우 (pageLimit = totalPages)
export const AllPagesVisible = Template.bind({});
AllPagesVisible.args = {
  totalPages: 7,
  pageLimit: 7
};
