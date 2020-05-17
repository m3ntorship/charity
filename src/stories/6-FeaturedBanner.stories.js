import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { FeaturedBanner } from '../components/FeaturedBanner';
import data from './workstyleData.json';

export default {
  title: 'FeaturdBanner',
  component: FeaturedBanner,
  decorators: [withKnobs]
};

export const WorkStyleComponent = () => {
  return (
    <FeaturedBanner
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
      errorMessage={text('errorMessage', '')}
      getData={() => data}
    />
  );
};
