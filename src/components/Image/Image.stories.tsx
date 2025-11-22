import type { Meta, StoryFn } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    loading: { control: { type: 'select', options: ['eager', 'lazy'] } },
    decoding: {
      control: { type: 'select', options: ['async', 'sync', 'auto'] },
    },
  },
};

export default meta;

type Story = StoryFn<typeof Image>;

const Template: Story = (args) => (
  <div style={{ width: args.width ? args.width + 32 : 260 }}>
    <Image {...args} />
  </div>
);

export const Default: Story = Template.bind({});
Default.args = {
  src: '/portfolio_logo.jpg',
  alt: 'Demo logo',
  width: 128,
  height: 128,
};

export const WithSources: Story = Template.bind({});
WithSources.args = {
  src: '/portfolio_logo.jpg',
  alt: 'Demo logo',
  width: 128,
  height: 128,
  sources: [{ srcSet: '/portfolio_logo.jpg', type: 'image/jpeg' }],
};
