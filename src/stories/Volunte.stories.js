import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Volunte } from '../components/Volunte';

export default {
  title: 'Volunte',
  component: Volunte,
  decorators: [withKnobs]
};

const data = {
  description: 'Best Way ot Make a Difference in the Lives of Others',
  button: {
    title: 'Become Volunteer',
    link: '#'
  }
};

export const VolunteComponent = () => {
  return (
    <Volunte
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
