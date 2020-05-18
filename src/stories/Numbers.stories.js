import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Numbers } from '../components/Numbers';

export default {
  title: 'Numbers',
  component: Numbers,
  decorators: [withKnobs]
};

const data = {
  id: '5ea8c869d7c5de203463948e',
  title: 'Numbers Speak',
  speaking_numbers: [
    {
      id: '5ea8c869d7c5de203463948f',
      title: 'Campaigns',
      number: '66'
    },
    {
      id: '5ea8c869d7c5de2034639490',
      title: 'Donations',
      number: '3300'
    },
    {
      id: '5ea8c869d7c5de2034639491',
      title: 'Volunteers',
      number: '70'
    },
    {
      id: '5ea8c869d7c5de2034639492',
      title: 'Funds Raised',
      number: '88'
    }
  ],
  image_background: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/article-image2_5d2262a3fe_ba31def413.jpeg'
  }
};

export const NumbersComponent = () => {
  return (
    <Numbers
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
