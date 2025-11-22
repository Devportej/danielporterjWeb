import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Footer',
  component: Footer,
};

export const Default = () => (
  <MemoryRouter>
    <div style={{ padding: 24 }}>
      <Footer />
    </div>
  </MemoryRouter>
);
