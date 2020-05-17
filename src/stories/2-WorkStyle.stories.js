import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { WorkStyle } from '../components/WorkStyle';
import data from './workstyleData.json';

export default {
  title: 'WorkStyle',
  component: WorkStyle,
  decorators: [withKnobs]
};

export const WorkStyleComponent = () => {
  return (
    <WorkStyle
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
      errorMessage={text('errorMessage', '')}
      // getData={() => data}
    />
  );
};
