import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    style={{ width: '195px', height: '54px' }}
    speed={2}
    viewBox="0 0 195 54"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
  >
    <circle cx="25" cy="22" r="25" />
    <rect x="75" y="14" rx="4" ry="4" width="120" height="8" />
    <rect x="75" y="32" rx="4" ry="4" width="80" height="8" />
  </ContentLoader>
);

export default Loader;
