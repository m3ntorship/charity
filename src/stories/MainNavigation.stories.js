import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { MainNavigation } from '../components/MainNavigation';

export default {
  title: 'MainNavigation',
  component: MainNavigation,
  decorators: [withKnobs]
};
const data = {
  Links: [
    {
      text: 'Home',
      url: '/',

      id: '5eaa2074c9b7c8001799254b'
    },
    {
      text: 'Pages',
      url: '#',

      id: '5eaa2074c9b7c8001799254c'
    },
    {
      text: 'Donations',
      url: '#',
      id: '5eaa2074c9b7c8001799254d'
    },
    {
      text: 'Events',
      url: '#',

      id: '5eaa2074c9b7c8001799254e'
    },
    {
      text: 'News',
      url: '#',

      id: '5eaa2074c9b7c8001799254f'
    },
    {
      text: 'Contact',
      url: '#',

      id: '5eaa2074c9b7c80017992550'
    }
  ],
  secondary_link: {
    text: 'Start Donating',
    url: '#/StartDonating'
  }
};
export const MainNavigationComponent = () => {
  return (
    <MainNavigation
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
