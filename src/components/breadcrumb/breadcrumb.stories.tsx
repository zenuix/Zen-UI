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
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Category</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const Default = DefaultTemplate.bind({});

const DirectionTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.List direction="col">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <ArrowBigDownDash />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <ArrowBigDownDash />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Category</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const Direction = DirectionTemplate.bind({});

const CustomSeparatorTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      {/* 커스텀 문자열 구분자 */}
      <Breadcrumb.Separator>{'>>'}</Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
      </Breadcrumb.Item>
      {/* 커스텀 요소 구분자 */}
      <Breadcrumb.Separator>
        <ArrowBigRightDash />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Category</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const CustomSeparator = CustomSeparatorTemplate.bind({});

const CollapseTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.List
      maxItems={6}
      itemsBeforeCollapse={2}
      itemsAfterCollapse={3}
      // ellipsisStyle={<span onClick={() => alert('Expand Breadcrumbs!')}>🔍 More...</span>}
    >
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Item 1</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Item 2</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Item 3</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Item 4</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Item 5</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Item 6</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const Collapse = CollapseTemplate.bind({});
