import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Heading from '../components/Heading';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs]
};

export const DefaultHeading = () => {
  return (
    <Heading
      primaryText={text('primary text', 'Welcome section')}
      secondaryText={text('secondary text', 'Causes')}
      align={text('Alignment', 'center')}
      primaryTextColor={text('Primary text Color', 'dark')}
    />
  );
};

export const SecondaryHeading = () => {
  return (
    <div style={{ backgroundColor: 'teal', padding: '50px' }}>
      <Heading
        primaryText={text('primary text', 'Welcome section ')}
        secondaryText={text('secondary text', ' Causes')}
        align={text('Alignment', 'left')}
      />
    </div>
  );
};
