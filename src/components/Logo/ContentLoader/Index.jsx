import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <div className="container">
    <ContentLoader
      speed={2}
      viewBox="0 0 1170 128"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="162" cy="64" r="53" />
      <circle cx="407" cy="76" r="19" />
      <circle cx="665" cy="72" r="19" />
      <circle cx="928" cy="76" r="19" />
      <rect x="454" y="82" rx="7" ry="7" width="80" height="6" />
      <rect x="453" y="63" rx="7" ry="7" width="80" height="6" />
      <rect x="710" y="60" rx="7" ry="7" width="80" height="6" />
      <rect x="711" y="79" rx="7" ry="7" width="80" height="6" />
      <rect x="973" y="64" rx="7" ry="7" width="80" height="6" />
      <rect x="973" y="82" rx="7" ry="7" width="80" height="6" />
    </ContentLoader>{' '}
  </div>
);

export default Loader;
