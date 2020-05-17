import React from 'react';
import { MainContact } from '../components/WorkStyle';
import data from './workstyleData.json';

export default {
  title: 'WorkStyleComponent',
  component: MainContact,
  decorators: [withKnobs]
};

export const MainContactComponent = () => {
  return (
    <MainContact
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
      errorMessage={text('errorMessage', '')}
      // getData={() => data}
    />
  );
};
