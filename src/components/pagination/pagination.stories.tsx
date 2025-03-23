import { Meta, StoryFn } from '@storybook/react';
import Pagination from './index';
import './style.css';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as Meta;

const DefaultTemplate: StoryFn = () => (
  <Pagination
    totalPages={10}
    pageLimit={5}
    leadingEllipsis={true}
    trailingEllipsis={true}
  >
    <Pagination.content>
      <Pagination.previous />
      <Pagination.ellipsis show={true} type="leadingEllipsis" />
      <Pagination.pages />
      <Pagination.ellipsis show={true} type="trailingEllipsis" />
      <Pagination.next />
    </Pagination.content>
  </Pagination>
);

export const Default = DefaultTemplate.bind({});
