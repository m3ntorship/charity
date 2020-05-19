import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Sponsers } from '../components/Sponsers';

export default {
  title: 'Sponsers',
  component: Sponsers,
  decorators: [withKnobs]
};

const urls = [
  {
    _id: '5eaad5da56cefb00173f03b4',
    image: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/envato-dark_344050698e_6225b21c86.png'
    }
  },
  {
    _id: '5eb89c530e79a21caf96f726',
    image: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/envato-dark_344050698e_6225b21c86.png'
    }
  },
  {
    _id: '5eaad5fb56cefb00173f03b8',
    image: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/envato-dark_344050698e_6225b21c86.png'
    }
  },
  {
    _id: '5eaad61556cefb00173f03ba',
    image: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/envato-dark_344050698e_6225b21c86.png'
    }
  }
];

export const SponsersComponent = () => {
  return (
    <Sponsers
      urls={urls}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
