import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    width={1170}
    height={80}
    viewBox="0 0 1170 80"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="130" y="40" rx="5" ry="5" width="75" height="12" />
    <circle cx="10" cy="110" r="8" />
    <rect x="260" y="40" rx="5" ry="5" width="75" height="12" />
    <rect x="390" y="40" rx="5" ry="5" width="75" height="12" />
    <rect x="520" y="40" rx="5" ry="5" width="75" height="12" />
    <rect x="650" y="40" rx="5" ry="5" width="75" height="12" />
    <rect x="780" y="40" rx="5" ry="5" width="75" height="12" />
    <rect x="960" y="40" rx="5" ry="5" width="100" height="12" />
  </ContentLoader>
);

export default Loader;
