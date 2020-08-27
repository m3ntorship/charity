import React from 'react';
import Heading from '../Heading';
import HomepageGallery from '../HomepageGallery';

const GallerySection = () => {
  return (
    <div>
      <div className="bg-c100 py-24 mb-2">
        <Heading
          primaryText="Our Photo"
          secondaryText="Gallery"
          align="center"
          primaryTextColor="white"
          size="xxl"
        />
      </div>
      <HomepageGallery />
    </div>
  );
};

export default GallerySection;
