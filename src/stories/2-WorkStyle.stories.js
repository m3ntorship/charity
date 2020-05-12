import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { WorkStyle } from '../components/WorkStyle';
import data from './workstyleData.json';
import './styles.css';

export default {
  title: 'WorkStyle',
  component: WorkStyle,
  decorators: [withKnobs],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    }
  }
};

export const WorkStyleComponent = () => {
  return (
    <div className="font-body">
      <WorkStyle
        data={data}
        loading={boolean('loading', false)}
        error={boolean('error', false)}
        errorMessage={text('errorMessage', '')}
        getData={() => data}
      />
    </div>
  );
};
