import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import WorkStyleCard from '../components/WorkStyleCard';

export default {
  title: 'WorkStyleCard',
  component: WorkStyleCard,
  decorators: [withKnobs]
};

const data = {
  Title: 'Join Our Website',
  description: 'Lorem ipsum is simply free text available in market websites',
  color: 'red',
  image_main: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/01_b1fa2ff765_4169772f96.svg'
  },
  image_main_hover: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_eb5234d0f2_a67e8efb99.jpeg'
  }
};
export const WorkStyleCardComponent = () => {
  return (
    <WorkStyleCard
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
