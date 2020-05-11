
import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    width={1170}
    height={20}
    viewBox="0 0 1170 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="937" cy="8" r="8" />
    <rect x="29" y="4" rx="5" ry="5" width="400" height="10" />
    <circle cx="976" cy="8" r="8" />
    <circle cx="1015" cy="9" r="8" />
    <circle cx="1058" cy="9" r="8" />
    <rect x="799" y="3" rx="5" ry="5" width="100" height="10" />
  </ContentLoader>
);

export default Loader;
