import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Banner } from '../components/ArticleBanner';
import { MemoryRouter } from 'react-router-dom';

const data = {
  links: [
    { text: 'Home', url: '#home', id: '1' },
    { text: 'latest news', url: '#latest news', id: '2' }
  ],
  _id: '5eaed8f281864200173c4922',
  intro: 'Make an Impact',
  link: {
    text: 'View Causes',
    url: 'link url'
  },
  heading: {
    heading_primary: 'News & Articles'
  },

  image: {
    name: 'children',

    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
  }
};

export default {
  title: 'Article Banner',
  component: Banner,
  decorators: [withKnobs]
};

export const ArticleBanner = () => {
  return (
    <MemoryRouter>
      <Banner
        data={data}
        loading={boolean('loading', false)}
        error={boolean('error', false)}
      />
    </MemoryRouter>
  );
};
