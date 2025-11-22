import React from 'react';
import Grid from './Grid';
import Card from '../Card/Card';

export default {
  title: 'Components/Grid',
  component: Grid,
};

export const FixedColumns = () => (
  <Grid rows={2} cols={3} gap={16}>
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
    <Card>6</Card>
  </Grid>
);

export const ResponsiveAutoFit = () => (
  <Grid rows={0} minColWidth={200} gap={16}>
    {Array.from({ length: 8 }).map((_, i) => (
      <Card key={i}>{`Item ${i + 1}`}</Card>
    ))}
  </Grid>
);

export const ResponsiveCapped = () => (
  <Grid rows={0} minColWidth={200} maxCols={3} gap={16}>
    {Array.from({ length: 8 }).map((_, i) => (
      <Card key={i}>{`Item ${i + 1}`}</Card>
    ))}
  </Grid>
);
