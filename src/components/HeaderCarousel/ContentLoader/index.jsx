import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    style={{ margin: 'auto', display: 'flex' }}
<<<<<<< HEAD
    preserveAspectRatio="none"
    speed={2}
    width={1024}
    height={600}
    viewBox="0 0 1024 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="400" y="8" rx="35" ry="35" width="250" height="50" />
    <rect x="142" y="91" rx="50" ry="50" width="750" height="90" />
    <rect x="212" y="208" rx="50" ry="50" width="630" height="81" />
    <rect x="413" y="318" rx="3" ry="3" width="225" height="66" />
=======
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
>>>>>>> a8c5e5be754327b713cc048596a9f2fa33f3de97
  </ContentLoader>
);

export default Loader;
