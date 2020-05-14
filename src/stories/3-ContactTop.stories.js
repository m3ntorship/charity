import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import data from './contactTopData.json';
import { ContactTop } from '../components/ContactTop';

export default {
  title: 'ContactTop',
  component: ContactTop,
  decorators: [withKnobs]
};

export const CotactTopComponent = () => {
  return (
    <ContactTop
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
      haveBtn={boolean('haveButton', false)}
      donated={boolean('donated', false)}
      clicked={action('donate clicked')}
    />
  );
};
