import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { HeaderCarousel } from '../components/HeaderCarousel';

const SingleSlideData = [
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
const MultipleSlidesData = [
  {
    _id: '5eaed8f281864200173c4922',
    intro: 'Leave Your Mark',
    link: {
      text: 'View Causes',
      url: 'link url'
    },
    heading: {
      heading_primary: 'Help Others',
      heading_secondary: 'Make Thier Day'
    },

    image: {
      name: 'children',

      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
    }
  },
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
  },
  {
    _id: '5eaed8f281864200173c4922',
    intro: 'Make a Differenc',
    link: {
      text: 'View Causes',
      url: 'link url'
    },
    heading: {
      heading_primary: 'Spread Joy',
      heading_secondary: 'in Other Hearts'
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

export const HeaderCarouselSingleSlide = () => {
  return (
    <HeaderCarousel
      data={SingleSlideData}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
export const HeaderCarouselMultipleSlides = () => {
  return (
    <HeaderCarousel
      data={MultipleSlidesData}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
