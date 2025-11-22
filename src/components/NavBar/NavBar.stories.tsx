import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
};

export const Default = () => (
  <MemoryRouter>
    <NavBar />
  </MemoryRouter>
);
