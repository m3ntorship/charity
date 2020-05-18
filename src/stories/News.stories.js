import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { News } from '../components/NewsAndArticles';

export default {
  title: 'News',
  component: News,
  decorators: [withKnobs]
};

const data = {
  home_articles: [
    {
      id: '5eaa1b013482057530be1bef',
      description: 'A Clean Water Gives More Good Taste',
      date: '2020-04-15T10:00:00.000Z',
      title: 'Water Need in Africa',
      link: {
        id: '5eaa1b013482057530be1bf0',
        text: 'Read more',
        url: '#readmore'
      },
      image: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card3_a56e0bb05d_62e507b91e.jpeg',
        id: '5eb899a60e79a21caf96f6e0'
      }
    },
    {
      id: '5eaaf887d628f6001779b7c6',
      description: 'A Clean Water Gives More Good Taste',
      title: 'Water Need in Africa',
      link: {
        id: '5eaaf887d628f6001779b7c7',
        text: 'Read More',
        url: '#readmore2'
      },
      image: {
        id: '5eb89af10e79a21caf96f702',
        name: 'causes-card2_8563b353ef_b5daf5114b',
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg'
      },
      date: '2020-05-12T10:00:00.000Z'
    },
    {
      id: '5eaaf8c8d628f6001779b7cb',
      description: 'lorem ipsum',
      title: 'Water Need in Africa',
      link: {
        id: '5eaaf8c8d628f6001779b7cc',
        text: 'Read More',
        url: '#readmre3'
      },
      image: {
        id: '5eb89b9d0e79a21caf96f717',
        name: 'causes-card1_eb5234d0f2',
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_eb5234d0f2_a67e8efb99.jpeg'
      },
      date: '2020-05-07T10:00:00.000Z'
    }
  ],
  id: '5eaa1b3e3482057530be1bf3',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo eveniet recusandae molestiae reiciendis a sequi sapiente',
  heading: {
    id: '5eaa1b3e3482057530be1bf4',
    heading_primary: 'News &',
    heading_secondary: 'Articles'
  },
  link: {
    id: '5eaa1b3e3482057530be1bf6',
    url: '#all',
    text: 'View All Posts'
  }
};

export const NewsComponent = () => {
  return (
    <News
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
