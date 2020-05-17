import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    style={{
      width: '150px',
      height: '54px'
    }}
    speed={2}
    viewBox="0 0 150 54"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="27" ry="27" width="150" height="54" />
  </ContentLoader>
);

export default Loader;
