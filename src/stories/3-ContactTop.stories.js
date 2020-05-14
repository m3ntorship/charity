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
      haveBtn={boolean('haveButton', false)} // If Your Component Have a Donate Button
      // the nest two state for test button click event and it's effect in the main component
      donated={boolean('donated', false)} // for test changes in the component
      clicked={action('donate clicked')} // for test button click event => You will need to make onClick event in the btn element in the component to equal (click) and go back to the action window tos ee if it's work
    />
  );
};
