import React from 'react';
import ContentLoader from 'react-content-loader';

export const ImageLoader = () => (
  <ContentLoader
    speed={2}
    width={1100}
    height={400}
    viewBox="0 0 1100 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
  >
    <rect x="0" y="0" rx="0" ry="0" width="1100" height="400" />
  </ContentLoader>
);

export const NumberLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={230}
      height={230}
      viewBox="0 0 230 230"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      preserveAspectRatio="none"
    >
      <rect x="30" y="80" rx="15" ry="15" width="170" height="50" />
      <rect x="30" y="155" rx="6" ry="6" width="170" height="12" />
    </ContentLoader>
  );
};
