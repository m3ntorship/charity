import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Heading from '../components/Heading';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './styles.css';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    }
  }
};

export const DefaultHeading = () => {
  return (
    <div className="font-body" style={{ padding: '50px' }}>
      <Heading
        primaryText={text('primary text', 'Welcome section')}
        secondaryText={text('secondary text', 'Causes')}
        align={text('Alignment', 'center')}
        primaryTextColor={text('Primary text Color', 'dark')}
      />
    </div>
  );
};

export const SecondaryHeading = () => {
  return (
    <div
      className="font-body"
      style={{ backgroundColor: 'teal', padding: '50px' }}
    >
      <Heading
        primaryText={text('primary text', 'Welcome section ')}
        secondaryText={text('secondary text', ' Causes')}
        align={text('Alignment', 'left')}
      />
    </div>
  );
};
