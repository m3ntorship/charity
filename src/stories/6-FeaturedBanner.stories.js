import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { FeaturdBanner } from '../components/FeaturedBanner';
import data from './workstyleData.json';

export default {
  title: 'FeaturdBanner',
  component: FeaturdBanner,
  decorators: [withKnobs]
};

export const WorkStyleComponent = () => {
  return (
    <FeaturdBanner
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
      errorMessage={text('errorMessage', '')}
      getData={() => data}
    />
  );
};
