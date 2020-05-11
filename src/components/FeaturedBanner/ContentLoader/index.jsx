import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    width={1170}
    height={500}
    viewBox="0 0 1170 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="385" y="221" rx="14" ry="14" width="700" height="40" />
    <rect x="391" y="283" rx="14" ry="14" width="700" height="40" />
    <rect x="629" y="344" rx="14" ry="14" width="250" height="35" />
    <rect x="633" y="409" rx="0" ry="0" width="240" height="80" />
  </ContentLoader>
);

export default Loader;
