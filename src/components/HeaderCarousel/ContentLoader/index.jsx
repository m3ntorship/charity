import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    style={{ margin: 'auto', display: 'flex' }}
    speed={2}
    width={750}
    height={400}
    viewBox="0 0 750 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="250" y="0" rx="25" ry="25" width="250" height="50" />
    <rect x="0" y="70" rx="45" ry="45" width="750" height="90" />
    <rect x="60" y="180" rx="40" ry="40" width="630" height="80" />
    <rect x="260" y="280" rx="0" ry="0" width="230" height="70" />
  </ContentLoader>
);

export default Loader;
