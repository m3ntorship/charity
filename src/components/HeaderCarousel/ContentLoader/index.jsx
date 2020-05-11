import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    style={{ margin: 'auto' }}
    viewBox="-75 0 500 280"
    height={280}
    width={500}
    speed={3}
    {...props}
  >
    <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
    <rect x="6" y="190" rx="0" ry="0" width="150" height="20" />
    <rect x="4" y="215" rx="0" ry="0" width="150" height="20" />
    <rect x="4" y="242" rx="0" ry="0" width="70" height="25" />
  </ContentLoader>
);

export default Loader;
