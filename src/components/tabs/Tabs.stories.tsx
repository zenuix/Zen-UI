import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './index';

const meta = {
  title: 'Components/Tabs',
  component: Tabs
} as Meta;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const VerticalTabs: Story = {
  render: () => (
    <Tabs>
      <Tabs.tabGroup>
        <Tabs.tab id="1">About Us</Tabs.tab>
        <Tabs.tab id="2">Services</Tabs.tab>
        <Tabs.tab id="3">Portfolio</Tabs.tab>
        <Tabs.tab id="4">Contact</Tabs.tab>
        <Tabs.tab id="5">FAQ</Tabs.tab>
        <Tabs.tab id="6">Blog</Tabs.tab>
      </Tabs.tabGroup>
      <Tabs.contentGroup>
        <Tabs.content id="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
          iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
        </Tabs.content>
        <Tabs.content id="2">
          Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
          diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin
          sapien justo in libero. Vestibulum mollis mauris enim.
        </Tabs.content>
        <Tabs.content id="3">
          Etiam mollis est vel metus pellentesque egestas. Morbi aliquam feugiat enim, non tincidunt arcu ultricies at.
          Pellentesque interdum sed ante sollicitudin feugiat. Curabitur vitae pretium enim. Maecenas convallis urna
          vitae augue viverra ut fermentum tortor mattis. Nam laoreet aliquet condimentum. Quisque nec ornare nulla.
          Cras quis ante nec nunc varius varius nec non ante.
        </Tabs.content>
        <Tabs.content id="4">
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
          arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
          magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
          metus.
        </Tabs.content>
        <Tabs.content id="5">
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
          pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
          ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          augue.
        </Tabs.content>
        <Tabs.content id="6">
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
          cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum, magna a
          pellentesque adipiscing, magna mi ornare ligula, et fringilla orci augue vitae magna. Donec egestas, augue vel
          cursus vestibulum, sapien pede bibendum ligula.
        </Tabs.content>
      </Tabs.contentGroup>
    </Tabs>
  )
};

export const HorizontalTabs: Story = {
  render: () => (
    <Tabs orientation="horizontal">
      <Tabs.tabGroup>
        <Tabs.tab id="1">About Us</Tabs.tab>
        <Tabs.tab id="2">Services</Tabs.tab>
        <Tabs.tab id="3">Portfolio</Tabs.tab>
        <Tabs.tab id="4">Contact</Tabs.tab>
        <Tabs.tab id="5">FAQ</Tabs.tab>
        <Tabs.tab id="6">Blog</Tabs.tab>
      </Tabs.tabGroup>
      <Tabs.contentGroup>
        <Tabs.content id="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
          iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
        </Tabs.content>
        <Tabs.content id="2">
          Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
          diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin
          sapien justo in libero. Vestibulum mollis mauris enim.
        </Tabs.content>
        <Tabs.content id="3">
          Etiam mollis est vel metus pellentesque egestas. Morbi aliquam feugiat enim, non tincidunt arcu ultricies at.
          Pellentesque interdum sed ante sollicitudin feugiat. Curabitur vitae pretium enim. Maecenas convallis urna
          vitae augue viverra ut fermentum tortor mattis. Nam laoreet aliquet condimentum. Quisque nec ornare nulla.
          Cras quis ante nec nunc varius varius nec non ante.
        </Tabs.content>
        <Tabs.content id="4">
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
          arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
          magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
          metus.
        </Tabs.content>
        <Tabs.content id="5">
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
          pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
          ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          augue.
        </Tabs.content>
        <Tabs.content id="6">
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
          cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum, magna a
          pellentesque adipiscing, magna mi ornare ligula, et fringilla orci augue vitae magna. Donec egestas, augue vel
          cursus vestibulum, sapien pede bibendum ligula.
        </Tabs.content>
      </Tabs.contentGroup>
    </Tabs>
  )
};
