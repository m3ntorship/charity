import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FindEventWidget } from '../components/Widgets';

export default {
  title: 'FindEvent',
  component: FindEventWidget,
  decorators: [withKnobs]
};

const data = {
  id: 5
};

export const FindEventWidgetComponent = () => {
  return <FindEventWidget data={data} />;
};
