import React from 'react';
import ContentLoader from 'react-content-loader';

export const HeadLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={130}
    viewBox="0 0 300 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="42" rx="3" ry="3" width="300" height="40" />
  </ContentLoader>
);

export const DescLoader = () => (
  <ContentLoader
    speed={1}
    width={400}
    height={200}
    viewBox="0 0 370 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="42" rx="3" ry="3" width="290" height="10" />
    <rect x="0" y="69" rx="3" ry="3" width="290" height="10" />
    <rect x="0" y="96" rx="3" ry="3" width="290" height="10" />
    <rect x="0" y="120" rx="3" ry="3" width="200" height="10" />
  </ContentLoader>
);

export const CaroselLoader = () => (
  <ContentLoader
    speed={2}
    width={700}
    height={600}
    viewBox="0 0 700 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="700" height="800" />
  </ContentLoader>
);
