import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    width={700}
    height={280}
    viewBox="0 0 700 280"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
  >
    <rect x="0" y="0" rx="14" ry="14" width="700" height="40" />
    <rect x="0" y="60" rx="14" ry="14" width="700" height="40" />
    <rect x="225" y="120" rx="14" ry="14" width="250" height="35" />
    <rect x="230" y="200" rx="0" ry="0" width="240" height="80" />
  </ContentLoader>
);

export default Loader;
