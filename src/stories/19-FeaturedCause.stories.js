import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { FeaturedCause } from '../components/FeaturedCause';

export default {
  title: 'FeaturedCause',
  component: FeaturedCause,
  decorators: [withKnobs]
};

const data = {
  cause: {
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
    }
  }
};

export const FeaturedCauseComponent = () => {
  return (
    <FeaturedCause
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
