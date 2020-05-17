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
        alternativeText: '',
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
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg'
      },
      id: '5eab48bf38c1d900177ea1c8'
    },
    {
      description: 'Aliq is notum hender erit a augue insu image pellen tes.',
      title: 'Raise Funds for Saving disabled Kids',
      goal: 20000,
      raised: 5000,
      link: {
        text: 'Donate Now',
        url: '#readmore'
      },
      image: {
        alternativeText: '',
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg'
      },
      id: '5eab490038c1d900177ea1cc'
    }
  ],
  causes_heading: {
    heading_primary: 'Our popular ',
    heading_secondary: 'Causes'
  }
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
