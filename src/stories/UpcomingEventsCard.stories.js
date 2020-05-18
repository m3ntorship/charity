import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { FeaturedBanner } from '../components/FeaturedBanner';

export default {
  title: 'FeaturdBanner',
  component: FeaturedBanner,
  decorators: [withKnobs]
};

export const WorkStyleComponent = () => {
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
