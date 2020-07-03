import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import EventDate from '../components/Date';

export default {
  title: 'Date',
  component: Date,
  decorators: [withKnobs]
};
const date = '2020-09-07T10:00:00.000Z';

export const DateComponent = () => {
  return <EventDate date={date} />;
};
