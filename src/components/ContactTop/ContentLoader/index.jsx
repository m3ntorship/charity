import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    style={{ width: '100%', height: 'auto' }}
    viewBox="0 0 1170 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="900" cy="20" r="8" />
    <rect x="180" y="23" rx="5" ry="5" width="200" height="10" />
    <circle cx="925" cy="20" r="8" />
    <circle cx="950" cy="20" r="8" />
    <circle cx="975" cy="20" r="8" />
    <rect x="798" y="23" rx="5" ry="5" width="60" height="10" />
  </ContentLoader>
);

export default Loader;
