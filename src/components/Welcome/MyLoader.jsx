import React from 'react';
import ContentLoader from 'react-content-loader';

export const MainLoader = () => (
  <ContentLoader
    speed={2}
    width={515}
    height={259}
    viewBox="0 0 515 259"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
  >
    <rect x="0" y="0" rx="15" ry="15" width="515" height="30" />
    <rect x="0" y="44" rx="15" ry="15" width="515" height="30" />
    <rect x="0" y="177" rx="6" ry="6" width="515" height="12" />
    <rect x="0" y="247" rx="6" ry="6" width="515" height="12" />
    <rect x="0" y="211" rx="6" ry="6" width="515" height="12" />
  </ContentLoader>
);

export const ImageLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={473}
      height={724}
      viewBox="0 0 473 724"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" rx="10" ry="10" width="473" height="724" />
    </ContentLoader>
  );
};

export const ListLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={240}
      height={120}
      viewBox="0 0 240 120"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      preserveAspectRatio="none"
    >
      <rect x="40" y="0" rx="10" ry="10" width="200" height="20" />
      <rect x="40" y="75" rx="6" ry="6" width="200" height="12" />
      <circle cx="5" cy="5" r="10" />
      <rect x="40" y="106" rx="6" ry="6" width="200" height="12" />
    </ContentLoader>
  );
};

export const ButtonLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={80}
      viewBox="0 0 250 80"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" rx="0" ry="0" width="250" height="80" />
    </ContentLoader>
  );
};
