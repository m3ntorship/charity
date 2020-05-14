import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import data from './contactTopData.json';
import { ContactTop } from '../otherPagesComponent/ContactTop';

export default {
  title: 'ContactTop',
  component: ContactTop,
  decorators: [withKnobs]
};

export const CotactTopComponent = () => {
  return (
    <ContactTop
      socialIconsList={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
      clicked={boolean('clicked', false)}
    />
  );
};
