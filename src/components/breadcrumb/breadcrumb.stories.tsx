import { Meta, StoryFn } from '@storybook/react';
import Breadcrumb from './index';
import './style.css';
import { ArrowBigDownDash, ArrowBigRightDash } from 'lucide-react';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
} as Meta;

const DefaultTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.list>
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
);

export const Default = DefaultTemplate.bind({});

const DirectionTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.list direction="col">
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

const CustomSeparatorTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.list>
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

const CollapseTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.list
      maxItems={3}
      itemsBeforeCollapse={1}
      itemsAfterCollapse={2}
      // ellipsisStyle={<span onClick={() => alert('Expand Breadcrumbs!')}>🔍 More...</span>}
    >
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
        <Breadcrumb.page>Item 6</Breadcrumb.page>
      </Breadcrumb.item>
    </Breadcrumb.list>
  </Breadcrumb>
);

export const Collapse = CollapseTemplate.bind({});
