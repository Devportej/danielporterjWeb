import type { Meta, StoryFn } from '@storybook/react';
import NLink from './NLink';

const meta: Meta<typeof NLink> = {
  title: 'Components/NLink',
  component: NLink,
  argTypes: {
    text: { control: 'text' },
    location: { control: 'text' },
    external: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryFn<typeof NLink>;

const Template: Story = (args) => (
  <div>
    {args.external ? (
      <NLink location={args.location} text={args.text} external={true} />
    ) : (
      <NLink location={args.location} text={args.text} nav={() => undefined} />
    )}
  </div>
);

export const External: Story = Template.bind({});
External.args = {
  location: 'https://example.com',
  text: 'External Link',
  external: true,
};

export const Internal: Story = Template.bind({});
Internal.args = { location: '/test', text: 'Internal Link', external: false };
