import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Event } from '../components/UpcomingEvents';

export default {
  title: 'Event',
  component: Event,
  decorators: [withKnobs]
};

const data = {
  title: 'Pure water and fresh food',
  address: 'Broklyn Street 40, New York',
  date: '2020-09-07T10:00:00.000Z',
  image: {
    alternativeText: '',
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_eb5234d0f2_a67e8efb99.jpeg'
  },
  user: {
    confirmed: true,
    blocked: false,
    username: 'admin',
    email: 'charity_admin@example.com',
    provider: 'local'
  },
  id: '5ea9f29c0d90be0017d7af83'
};

export const EventComponent = () => {
  return <Event data={data} loading={boolean('loading', false)} />;
};
