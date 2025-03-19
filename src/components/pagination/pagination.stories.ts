import { Meta, StoryFn } from '@storybook/react';
import Pagination from './index';
import './style.css';
import Preview from './preview';

const meta: Meta = {
  title: 'Components/Pagination',
  component: Preview,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

export const Default = {
  args: {
    totalPages: 10,
    pageLimit: 5,
    leadingEllipsis: true,
    trailingEllipsis: true
  }
};

// export default {
//   title: 'Components/Pagination',
//   component: Pagination
// } as Meta;

// const DefaultTemplate: StoryFn = () => (
//   <Pagination
//     totalPages={totalPages}
//     pageLimit={pageLimit}
//     leadingEllipsis={leadingEllipsis}
//     trailingEllipsis={trailingEllipsis}
//   >
//     <Pagination.content>
//       <Pagination.previous />
//       <Pagination.ellipsis show={leadingEllipsis} type="leadingEllipsis" />
//       <Pagination.pages />
//       <Pagination.ellipsis show={trailingEllipsis} type="trailingEllipsis" />
//       <Pagination.next />
//     </Pagination.content>
//   </Pagination>
// );

// export const Default = DefaultTemplate.bind({});
