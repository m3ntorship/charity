import React from 'react';
import ContentLoader from 'react-content-loader';

export const HeaderLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={100}
    viewBox="0 0 250 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
  >
    <rect x="10" y="37" rx="2" ry="2" width="250" height="50" />
  </ContentLoader>
);

export const ParagraphLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={100}
    viewBox="0 0 400 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
  >
    <rect x="10" y="32" rx="2" ry="2" width="400" height="10" />
    <rect x="10" y="50" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="70" rx="2" ry="2" width="350" height="10" />
  </ContentLoader>
);

export const BtnLoader = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={100}
    viewBox="0 0 200 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
    className="md:float-right"
  >
    <rect x="10" y="37" rx="2" ry="2" width="150" height="50" />
  </ContentLoader>
);

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
