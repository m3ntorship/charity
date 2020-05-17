import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { HeaderCarousel } from '../components/HeaderCarousel';

const data = [
  {
    _id: '5eaed8f281864200173c4922',
    intro: 'Make an Impact',
    link: {
      text: 'View Causes',
      url: 'link url'
    },
    heading: {
      heading_primary: 'You Can Make',
      heading_secondary: 'A Difference'
    },

    image: {
      name: 'children',

      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
    }
  }
];

export default {
  title: 'HeaderCarousel',
  component: HeaderCarousel,
  decorators: [withKnobs]
};

export const HeaderCarouselComponent = () => {
  return (
    <HeaderCarousel
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
