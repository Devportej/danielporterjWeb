import React from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => (
  <div style={{ width: 260 }}>
    <Image src="/portfolio_logo.jpg" alt="Demo logo" width={128} height={128} />
  </div>
);

export const WithSources = () => (
  <div style={{ width: 320 }}>
    <Image
      src="/portfolio_logo.jpg"
      alt="Demo logo"
      width={128}
      height={128}
      sources={[{ srcSet: '/portfolio_logo.jpg', type: 'image/jpeg' }]}
    />
  </div>
);
