import React from 'react';
import './Image.css';

type Source = {
  srcSet: string;
  type?: string;
  media?: string;
};

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'sync' | 'auto';
  sources?: Source[];
  style?: React.CSSProperties;
};

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  decoding = 'async',
  sources,
  style,
}: ImageProps) => {
  return (
    <picture className={className}>
      {sources &&
        sources.map((s, i) => (
          <source key={i} srcSet={s.srcSet} type={s.type} media={s.media} />
        ))}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        style={style}
      />
    </picture>
  );
};

export default Image;
