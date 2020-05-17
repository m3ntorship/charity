import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={440}
    height={640}
    viewBox="0 0 440 640"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
  >
    <rect x="0" y="0" rx="0" ry="0" width="440" height="5" />
    <rect x="0" y="635" rx="0" ry="0" width="440" height="5" />
    <rect x="0" y="0" rx="0" ry="0" width="5" height="640" />
    <rect x="435" y="0" rx="0" ry="0" width="5" height="640" />
    <rect x="30" y="30" rx="0" ry="0" width="380" height="220" />
    <rect x="30" y="280" rx="10" ry="10" width="380" height="20" />
    <rect x="30" y="310" rx="10" ry="10" width="200" height="20" />
    <rect x="30" y="384" rx="6" ry="6" width="380" height="12" />
    <rect x="30" y="405" rx="6" ry="6" width="180" height="12" />
    <rect x="30" y="450" rx="6" ry="6" width="160" height="12" />
    <rect x="30" y="480" rx="6" ry="6" width="160" height="12" />
    <rect x="30" y="530" rx="0" ry="0" width="380" height="12" />
    <rect x="30" y="550" rx="0" ry="0" width="380" height="60" />
  </ContentLoader>
);

export const TitleLoader = () => (
  <ContentLoader
    speed={2}
    width={470}
    height={50}
    viewBox="0 0 470 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
  >
    <rect x="0" y="0" rx="25" ry="25" width="470" height="50" />
  </ContentLoader>
);
