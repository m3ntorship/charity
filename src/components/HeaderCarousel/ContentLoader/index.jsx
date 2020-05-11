import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    viewBox="0 0 100% 475"
    height={props.height}
    width={props.width}
    speed={1}
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
  </ContentLoader>
);

export default Loader;
