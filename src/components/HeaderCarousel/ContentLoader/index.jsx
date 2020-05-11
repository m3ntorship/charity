import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    style={{ margin: 'auto' }}
    speed={2}
    width={1024}
    height={600}
    viewBox="0 0 1024 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="112" y="25" rx="3" ry="3" width="800" height="325" />
    <rect x="356" y="380" rx="3" ry="3" width="350" height="25" />
    <rect x="480" y="460" rx="3" ry="3" width="100" height="25" />
    <rect x="356" y="420" rx="3" ry="3" width="350" height="25" />
  </ContentLoader>
);

export default Loader;
