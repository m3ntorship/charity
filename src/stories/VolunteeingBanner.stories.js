import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { VolunteeringBanner } from '../components/VolunteeringBanner';

export default {
  title: 'Volunteering Banner',
  component: VolunteeringBanner,
  decorators: [withKnobs]
};

const data = {
  description: 'Best Way ot Make a Difference in the Lives of Others',
  button: {
    title: 'Become Volunteer',
    link: '#'
  }
};

export const VolunteeringBannerComponent = () => {
  return (
    <VolunteeringBanner
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
