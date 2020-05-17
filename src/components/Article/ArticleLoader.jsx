import React from 'react';
import ContentLoader from 'react-content-loader';


export const ArticleLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
  >
    <rect x="14" y="32" rx="2" ry="2" width="380" height="238" />
  </ContentLoader>
);
