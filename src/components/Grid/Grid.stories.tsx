/* eslint-disable react/prop-types */

import type { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';
import Card from '../Card/Card';

type GridStoryArgs = ComponentProps<typeof Grid> & {
  count?: number;
};

const meta: Meta<GridStoryArgs> = {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    rows: { control: { type: 'number', min: 1, step: 1 } },
    cols: { control: { type: 'number', min: 1, step: 1 } },
    minColWidth: { control: 'text' },
    maxCols: { control: { type: 'number', min: 1, step: 1 } },
    gap: { control: 'text' },
    count: { control: { type: 'number', min: 1, step: 1 } },
  },
};

export default meta;

type Story = StoryFn<GridStoryArgs>;

const Template: Story = ({ count = 6, ...gridProps }) => (
  <Grid {...gridProps}>
    {Array.from({ length: Math.max(count, 1) }).map((_, i) => (
      <Card key={i}>{`Item ${i + 1}`}</Card>
    ))}
  </Grid>
);

export const FixedColumns: Story = Template.bind({});
FixedColumns.args = { rows: 2, cols: 3, gap: '16px', count: 6 };

export const ResponsiveAutoFit: Story = Template.bind({});
ResponsiveAutoFit.args = {
  rows: 1,
  cols: 3,
  minColWidth: '200px',
  gap: '16px',
  count: 8,
};

export const ResponsiveCapped: Story = Template.bind({});
ResponsiveCapped.args = {
  rows: 1,
  cols: 3,
  minColWidth: '200px',
  maxCols: 3,
  gap: '16px',
  count: 8,
};
