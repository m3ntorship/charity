import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RecentArticles } from '../components/RecentArticles';

export default {
  title: 'RecentArticles',
  component: RecentArticles,
  decorators: [withKnobs]
};

const data = [
  {
    description: 'A Clean Water Gives More Good Taste',
    date: '2020-04-15T10:00:00.000Z',
    title: 'Water Need in Africa',
    link: {
      text: 'Read more',
      url: '#readmore',
      id: '5eaa1b013482057530be1bf0'
    },
    createdAt: '2020-04-30T00:25:37.664Z',
    updatedAt: '2020-05-11T00:25:40.947Z',
    thumbnail: {
      name: 'causes-card3_a56e0bb05d',
      alternativeText: '',
      hash: 'causes-card3_a56e0bb05d_62e507b91e',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card3_a56e0bb05d_62e507b91e.jpeg'
    },
    id: '5eaa1b013482057530be1bef'
  },
  {
    description: 'A Clean Water Gives More Good Taste',
    date: '2020-04-15T10:00:00.000Z',
    title: 'Water Need in Africa',
    link: {
      text: 'Read more',
      url: '#readmore',
      id: '5eaa1b015882057530be1bf0'
    },
    createdAt: '2020-04-30T00:25:37.664Z',
    updatedAt: '2020-05-11T00:25:40.947Z',
    thumbnail: {
      name: 'causes-card3_a56e0bb05d',
      alternativeText: '',
      hash: 'causes-card3_a56e0bb05d_62e507b91e',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card3_a56e0bb05d_62e507b91e.jpeg'
    },
    id: '5eaa1b0134840579302e1bef'
  },
  {
    description: 'Lorem',
    date: '2020-04-15T10:00:00.000Z',
    title: 'Water Need in Africa',
    link: {
      text: 'Read more',
      url: '#readmore',
      id: '5eaa1b015882057530be1bf0'
    },
    createdAt: '2020-04-30T00:25:37.664Z',
    updatedAt: '2020-05-11T00:25:40.947Z',
    thumbnail: {
      name: 'causes-card3_a56e0bb05d',
      alternativeText: '',
      hash: 'causes-card3_a56e0bb05d_62e507b91e',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card3_a56e0bb05d_62e507b91e.jpeg'
    },
    id: '5eaa1b0134840579302e1bef'
  }
];

export const RecentArticlesComponent = () => {
  return (
    <RecentArticles
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
