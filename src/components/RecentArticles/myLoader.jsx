import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = () => (
  <ContentLoader
    style={{
      width: '110px',
      height: '30px'
    }}
    speed={2}
    viewBox="0 0 110 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="15" ry="15" width="110" height="30" />
  </ContentLoader>
);

export const ChevronLoader = () => (
  <ContentLoader
    style={{
      width: '20px',
      height: '20px'
    }}
    speed={2}
    viewBox="0 0 20 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="20" height="20" />
  </ContentLoader>
);

export const NumberLoader = () => (
  <ContentLoader
    style={{
      width: '20px',
      height: '10px'
    }}
    speed={2}
    viewBox="0 0 20 10"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="20" height="10" />
  </ContentLoader>
);

export const ListItemLoader = () => (
  <ContentLoader
    style={{
      width: '300px',
      height: '90px'
    }}
    speed={2}
    viewBox="0 0 300 90"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="90" height="90" />
    <rect x="110" y="0" rx="5" ry="5" width="100" height="10" />
    <rect x="110" y="35" rx="10" ry="10" width="150" height="20" />
  </ContentLoader>
);
