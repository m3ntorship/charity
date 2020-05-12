import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    style={{ margin: 'auto', display: 'flex' }}
    preserveAspectRatio="none"
    speed={2}
    width={1024}
    height={600}
    viewBox="0 0 1024 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="400" y="8" rx="3" ry="3" width="250" height="50" />
    <rect x="142" y="91" rx="3" ry="3" width="750" height="90" />
    <rect x="212" y="208" rx="3" ry="3" width="630" height="81" />
    <rect x="413" y="318" rx="3" ry="3" width="225" height="66" />
  </ContentLoader>
);

export default Loader;
