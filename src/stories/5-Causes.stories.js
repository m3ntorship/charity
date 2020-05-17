import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Causes } from '../components/Causes';

export default {
  title: 'Causes',
  component: Causes,
  decorators: [withKnobs]
};

const data = {
  causes: [
    {
      title: 'Raise Funds for Saving Poor Kids',
      description: 'Aliq is notum hender erit a augue insu image pellen tes.',
      goal: 10000,
      raised: 9000,
      link: {
        text: 'Donate Now',
        url: '#readmore',
        sort: 0
      },
      image: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg'
      },
      id: '5eab4022f2da718214b6f2cd'
    },
    {
      description: 'Aliq is notum hender erit a augue insu image pellen tes.',
      title: 'Raise Funds for Saving Kids In need',
      goal: 25000,
      raised: 10500,
      link: {
        text: 'Donate Now',
        url: '#readmore'
      },
      image: {
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
      id: '5eab48bf38c1d900177ea1c8'
    },
    {
      _id: '5eab490038c1d900177ea1cc',
      description: 'Aliq is notum hender erit a augue insu image pellen tes.',
      title: 'Raise Funds for Saving disabled Kids',
      goal: 20000,
      raised: 5000,
      link: {
        _id: '5eab490038c1d900177ea1cd',
        text: 'Donate Now',
        url: '#readmore',
        createdAt: '2020-04-30T21:54:08.167Z',
        updatedAt: '2020-05-11T00:23:36.489Z',
        __v: 0,
        id: '5eab490038c1d900177ea1cd'
      },
      createdAt: '2020-04-30T21:54:08.138Z',
      updatedAt: '2020-05-11T00:23:36.773Z',
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
      id: '5eab490038c1d900177ea1cc'
    }
  ],
  causes_heading: {
    heading_primary: 'Our popular ',
    heading_secondary: 'Causes'
  },
  id: '5ea7675de813230c389a987c'
};

export const CausesComponent = () => {
  return (
    <Causes
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
