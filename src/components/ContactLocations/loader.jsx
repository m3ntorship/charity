import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="33" rx="6" ry="6" width="176" height="26" />
    <circle cx="29" cy="113" r="19" />
    <circle cx="30" cy="180" r="19" />
    <circle cx="32" cy="258" r="19" />
    <rect x="65" y="172" rx="5" ry="5" width="147" height="14" />
    <rect x="70" y="250" rx="5" ry="5" width="147" height="14" />
    <rect x="66" y="106" rx="5" ry="5" width="147" height="14" />
  </ContentLoader>
);

export default MyLoader;
