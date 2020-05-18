import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { FeaturedBanner } from '../components/FeaturedBanner';

export default {
  title: 'FeaturdBanner',
  component: FeaturedBanner,
  decorators: [withKnobs]
};

const data = {
  text_primary:
    "Making someone else’s dreams a reality is something that's value is ",
  text_complementary: 'innumerable',
  button_text: 'Start Donation',
  button_url: '#',
  image_background: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/donation-banner-bg_15d2c4c3bf.jpeg'
  },
  image_top: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/donation-banner-icon_37be254b77_7b2a8696a1.png'
  }
};
export const FeaturedBannerComponent = () => {
  return (
    <div className="p-12">
      <FeaturedBanner
        data={data}
        loading={boolean('loading', false)}
        error={boolean('error', false)}
      />
    </div>
  );
};
