import React from 'react';
import ContentLoader from 'react-content-loader';

export const MainImgLoader = () => (
  <ContentLoader
    speed={2}
    width={800}
    height={475}
    viewBox="0 0 800 445"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="800" height="400" />
  </ContentLoader>
);

export const HeadlineLoader = () => (
  <ContentLoader
    speed={2}
    width={800}
    height={100}
    viewBox="0 0 800 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="3" cy="4" r="8" />
    <rect x="20" y="4" rx="2" ry="2" width="70" height="12" />
    <circle cx="127" cy="4" r="8" />
    <rect x="144" y="4" rx="2" ry="2" width="70" height="12" />
    <rect x="0" y="30" rx="2" ry="2" width="257" height="32" />
    <rect x="0" y="91" rx="2" ry="2" width="800" height="4" />
  </ContentLoader>
);

export const BodyText = () => (
  <ContentLoader
    speed={2}
    width={800}
    height={100}
    viewBox="0 0 800 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="3" rx="2" ry="2" width="800" height="11" />
    <rect x="0" y="20" rx="2" ry="2" width="800" height="11" />
    <rect x="0" y="38" rx="2" ry="2" width="800" height="11" />
    <rect x="0" y="57" rx="2" ry="2" width="800" height="11" />
    <rect x="-30" y="77" rx="2" ry="2" width="195" height="10" />
  </ContentLoader>
);

export const BodyImgs = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={200}
    viewBox="0 0 285 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="2" ry="2" width="230" height="200" />
  </ContentLoader>
);
