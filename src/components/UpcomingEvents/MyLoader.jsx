import React from 'react';
import ContentLoader from 'react-content-loader';

export const MainLoader = () => (
  <ContentLoader
    speed={2}
    width={610}
    height={200}
    viewBox="0 0 600 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
  >
    <rect x="50" y="0" rx="15" ry="15" width="500" height="30" />
    <rect x="0" y="110" rx="6" ry="6" width="600" height="12" />
    <rect x="0" y="145" rx="6" ry="6" width="600" height="12" />
    <rect x="0" y="180" rx="6" ry="6" width="600" height="12" />
  </ContentLoader>
);

export const CardLoader = () => {
  return (
    <ContentLoader
      style={{ width: '100%' }}
      speed={2}
      width={600}
      height={180}
      viewBox="0 0 600 180"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" rx="0" ry="0" width="600" height="2" />
      <rect x="0" y="0" rx="0" ry="0" width="2" height="180" />
      <rect x="0" y="178" rx="0" ry="0" width="600" height="2" />
      <rect x="598" y="0" rx="0" ry="0" width="2" height="180" />
      <rect x="0" y="0" rx="0" ry="0" width="150" height="180" />
      <circle cx="150" cy="90" r="50" />
      <rect x="230" y="80" rx="10" ry="10" width="300" height="20" />
      <rect x="235" y="121" rx="5" ry="5" width="196" height="10" />
      <rect x="235" y="50" rx="5" ry="5" width="104" height="10" />
      <rect x="355" y="50" rx="5" ry="5" width="104" height="10" />
    </ContentLoader>
  );
};

export const CauseLoader = () => {
  return (
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
      <circle cx="220" cy="131" r="100" />
      <rect x="80" y="280" rx="10" ry="10" width="280" height="20" />
      <rect x="120" y="310" rx="10" ry="10" width="200" height="20" />
      <rect x="80" y="384" rx="6" ry="6" width="280" height="12" />
      <rect x="80" y="405" rx="6" ry="6" width="280" height="12" />
      <rect x="138" y="480" rx="6" ry="6" width="160" height="12" />
      <rect x="140" y="510" rx="6" ry="6" width="160" height="12" />
      <rect x="70" y="560" rx="0" ry="0" width="300" height="80" />
    </ContentLoader>
  );
};
