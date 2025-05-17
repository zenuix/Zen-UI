import { Meta, StoryFn } from '@storybook/react';
import Breadcrumb from './index';
import './style.css';
import '../../global-style.css';
import { ArrowBigDownDash, ArrowBigRightDash } from 'lucide-react';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'col'],
      description: 'Breadcrumb list direction',
      table: {
        defaultValue: { summary: 'row' }
      }
    },
    maxItems: {
      control: 'number',
      description: 'Max number of breadcrumb items before collapsing'
    },
    itemsBeforeCollapse: {
      control: 'number',
      description: 'Number of items to show before collapse'
    },
    itemsAfterCollapse: {
      control: 'number',
      description: 'Number of items to show after collapse'
    },
    ellipsisStyle: {
      control: false,
      description: 'Custom ellipsis content for collapsed items (string or JSX element)'
    }
  },
  args: {
    direction: 'row',
    maxItems: undefined,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2,
    ellipsisStyle: '...'
  }
} as Meta<typeof Breadcrumb>;

const DefaultTemplate: StoryFn = (args) => (
  <>
    <Breadcrumb>
      <Breadcrumb.list {...args} ellipsisStyle={<button onClick={() => alert('More!')}>👀 See All</button>}>
        <Breadcrumb.item>
          <Breadcrumb.link href="/">Home</Breadcrumb.link>
        </Breadcrumb.item>
        <Breadcrumb.separator />
        <Breadcrumb.item>
          <Breadcrumb.link href="/products">Products</Breadcrumb.link>
        </Breadcrumb.item>
        <Breadcrumb.separator />
        <Breadcrumb.item>
          <Breadcrumb.page>Category</Breadcrumb.page>
        </Breadcrumb.item>
      </Breadcrumb.list>
    </Breadcrumb>
  </>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  direction: 'row'
};

const DirectionTemplate: StoryFn = (args) => (
  <Breadcrumb>
    <Breadcrumb.list {...args}>
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Home</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator>
        <ArrowBigDownDash />
      </Breadcrumb.separator>
      <Breadcrumb.item>
        <Breadcrumb.link href="/products">Products</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator>
        <ArrowBigDownDash />
      </Breadcrumb.separator>
      <Breadcrumb.item>
        <Breadcrumb.page>Category</Breadcrumb.page>
      </Breadcrumb.item>
    </Breadcrumb.list>
  </Breadcrumb>
);

export const Direction = DirectionTemplate.bind({});
Direction.args = {
  direction: 'col'
};

const CustomSeparatorTemplate: StoryFn = (args) => (
  <Breadcrumb>
    <Breadcrumb.list {...args}>
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Home</Breadcrumb.link>
      </Breadcrumb.item>
      {/* 커스텀 문자열 구분자 */}
      <Breadcrumb.separator>{'>>'}</Breadcrumb.separator>
      <Breadcrumb.item>
        <Breadcrumb.link href="/products">Products</Breadcrumb.link>
      </Breadcrumb.item>
      {/* 커스텀 요소 구분자 */}
      <Breadcrumb.separator>
        <ArrowBigRightDash />
      </Breadcrumb.separator>
      <Breadcrumb.item>
        <Breadcrumb.page>Category</Breadcrumb.page>
      </Breadcrumb.item>
    </Breadcrumb.list>
  </Breadcrumb>
);

export const CustomSeparator = CustomSeparatorTemplate.bind({});

const CollapseAndCustomEllipsisTemplate: StoryFn = (args) => (
  <Breadcrumb>
    <Breadcrumb.list {...args} ellipsisStyle={<span style={{ cursor: 'pointer' }}>🔍 More...</span>}>
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Item 1</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator />
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Item 2</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator />
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Item 3</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator />
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Item 4</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator />
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Item 5</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator />
      <Breadcrumb.item>
        <Breadcrumb.link href="/">Item 6</Breadcrumb.link>
      </Breadcrumb.item>
      <Breadcrumb.separator />
      <Breadcrumb.item>
        <Breadcrumb.page>Item 7</Breadcrumb.page>
      </Breadcrumb.item>
    </Breadcrumb.list>
  </Breadcrumb>
);

export const CollapseAndCustomEllipsis = CollapseAndCustomEllipsisTemplate.bind({});
CollapseAndCustomEllipsis.args = {
  maxItems: 5,
  itemsBeforeCollapse: 2,
  itemsAfterCollapse: 3
};
