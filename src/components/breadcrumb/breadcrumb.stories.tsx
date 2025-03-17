import { Meta, StoryFn } from '@storybook/react';
import Breadcrumb from './index';
import separatorImg from '../../assets/separator.png';
import './style.css';

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
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

export const Default = DefaultTemplate.bind({})

const DirectionTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.List direction='col'>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        {'⏬'}
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        {'⏬'}
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Category</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const Direction = DirectionTemplate.bind({})

const CustomSeparatorTemplate: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      {/* 커스텀 이미지 구분자 */}
      <Breadcrumb.Separator>
        <img src={separatorImg} alt="separator" width={16} />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
      </Breadcrumb.Item>
      {/* 커스텀 요소 구분자 */}
      <Breadcrumb.Separator>
        <span style={{ color: 'red' }}>▶</span>
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Category</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const CustomSeparator = CustomSeparatorTemplate.bind({});
