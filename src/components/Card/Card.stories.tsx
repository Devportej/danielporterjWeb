/* eslint-disable react/prop-types */

import type { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Card from './Card';

type CardStoryArgs = ComponentProps<typeof Card> & {
  width?: number;
};

const meta: Meta<CardStoryArgs> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    width: { control: { type: 'range', min: 240, max: 960, step: 20 } },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryFn<CardStoryArgs>;

const Template: Story = ({ width = 520, children }) => (
  <div style={{ width }}>
    <Card>
      {children ??
        'Card Title\nThis is a card used to hold a short summary or content block.'}
    </Card>
  </div>
);

export const Default: Story = Template.bind({});
Default.args = {
  width: 520,
  children:
    'Card Title\nThis is a card used to hold a short summary or content block.',
};
