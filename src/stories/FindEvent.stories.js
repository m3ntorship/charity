import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FindEvent } from '../components/Widgets';

export default {
  title: 'FindEvent',
  component: FindEvent,
  decorators: [withKnobs]
};

const data = {
  id: 5
};

export const EventComponent = () => {
  return <FindEvent data={data} />;
};
