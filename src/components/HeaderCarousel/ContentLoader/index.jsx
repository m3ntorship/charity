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
    <rect x="400" y="8" rx="3" ry="3" width="250" height="50" />
    <rect x="142" y="91" rx="3" ry="3" width="750" height="140" />
    <rect x="208" y="259" rx="3" ry="3" width="630" height="112" />
    <rect x="413" y="402" rx="3" ry="3" width="225" height="72" />
  </ContentLoader>
);

export default Loader;
