import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { SupportersWidget } from '../components/Widgets';

export default {
  title: 'Supporters',
  component: SupportersWidget,
  decorators: [withKnobs]
};

const data = {
  title: 'Supporters',
  supporters: [
    {
      _id: '5eaa1b013482057530be1bef',
      description: 'A Clean Water Gives More Good Taste',
      date: '2020-04-15T10:00:00.000Z',
      title: 'Water Need in Africa',
      link: {
        _id: '5eaa1b013482057530be1bf0',
        text: 'Read more',
        url: '#readmore',
        createdAt: '2020-04-30T00:25:37.698Z',
        updatedAt: '2020-05-11T00:25:40.658Z',
        __v: 0,
        id: '5eaa1b013482057530be1bf0'
      },
      createdAt: '2020-04-30T00:25:37.664Z',
      updatedAt: '2020-05-11T00:25:40.947Z',
      __v: 1,
      image: {
        _id: '5eb899a60e79a21caf96f6e0',
        name: 'causes-card3_a56e0bb05d',
        alternativeText: '',
        caption: '',
        hash: 'causes-card3_a56e0bb05d_62e507b91e',
        ext: '.jpeg',
        mime: 'image/jpeg',
        size: 24.99,
        width: 310,
        height: 310,
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card3_a56e0bb05d_62e507b91e.jpeg',
        formats: {
          thumbnail: {
            hash: 'thumbnail_causes-card3_a56e0bb05d_62e507b91e',
            ext: '.jpeg',
            mime: 'image/jpeg',
            width: 156,
            height: 156,
            size: 6.96,
            url:
              'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_causes-card3_a56e0bb05d_62e507b91e.jpeg'
          }
        },
        provider: 'aws-s3',
        related: ['5eaa1b013482057530be1bef'],
        createdAt: '2020-05-11T00:17:42.977Z',
        updatedAt: '2020-05-11T00:25:40.893Z',
        __v: 0,
        id: '5eb899a60e79a21caf96f6e0'
      },
      id: '5eaa1b013482057530be1bef'
    },
    {
      _id: '5eaaf887d628f6001779b7c6',
      description: 'A Clean Water Gives More Good Taste',
      title: 'Water Need in Africa',
      link: {
        _id: '5eaaf887d628f6001779b7c7',
        text: 'Read More',
        url: '#readmore2',
        createdAt: '2020-04-30T16:10:47.859Z',
        updatedAt: '2020-05-11T00:25:52.785Z',
        __v: 0,
        id: '5eaaf887d628f6001779b7c7'
      },
      createdAt: '2020-04-30T16:10:47.830Z',
      updatedAt: '2020-05-11T00:25:53.096Z',
      __v: 1,
      image: {
        _id: '5eb89af10e79a21caf96f702',
        name: 'causes-card2_8563b353ef_b5daf5114b',
        alternativeText: '',
        caption: '',
        hash: 'causes-card2_8563b353ef_b5daf5114b_ace5db76e1',
        ext: '.jpeg',
        mime: 'image/jpeg',
        size: 15.03,
        width: 310,
        height: 310,
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg',
        formats: {
          thumbnail: {
            hash: 'thumbnail_causes-card2_8563b353ef_b5daf5114b_ace5db76e1',
            ext: '.jpeg',
            mime: 'image/jpeg',
            width: 156,
            height: 156,
            size: 5.28,
            url:
              'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg'
          }
        },
        provider: 'aws-s3',
        related: [
          '5eab4022f2da718214b6f2cd',
          '5eab48bf38c1d900177ea1c8',
          '5eab490038c1d900177ea1cc',
          '5eaaf887d628f6001779b7c6'
        ],
        createdAt: '2020-05-11T00:23:13.966Z',
        updatedAt: '2020-05-11T00:25:53.040Z',
        __v: 0,
        id: '5eb89af10e79a21caf96f702'
      },
      date: '2020-05-12T10:00:00.000Z',
      id: '5eaaf887d628f6001779b7c6'
    }
  ]
};

export const SupportersWidgetComponent = () => {
  return (
    <SupportersWidget
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
