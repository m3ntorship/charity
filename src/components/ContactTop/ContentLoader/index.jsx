import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 1170 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="938" cy="26" r="8" />
    <rect x="93" y="23" rx="5" ry="5" width="400" height="10" />
    <circle cx="977" cy="26" r="8" />
    <circle cx="1015" cy="26" r="8" />
    <circle cx="1057" cy="24" r="8" />
    <rect x="798" y="23" rx="5" ry="5" width="100" height="10" />
  </ContentLoader>
);

export default Loader;
