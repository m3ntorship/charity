import React from 'react';
import { MainContact } from '../components/MainContact';

export default {
  title: 'MainContact',
  component: MainContact
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
