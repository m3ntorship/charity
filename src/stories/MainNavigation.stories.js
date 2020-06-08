import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { MainNavigation } from '../components/MainNavigation';

export default {
  title: 'MainNavigation',
  component: MainNavigation,
  decorators: [withKnobs]
};
const data = [
  {
    show_in_navigation: true,
    link: {
      text: 'Articles',
      url: '/articles'
    }
  },
  {
    show_in_navigation: true,
    link: {
      text: 'Donations',
      url: '/donations'
    }
  },
  {
    show_in_navigation: true,
    link: {
      text: 'Events',
      url: '/events'
    }
  },
  {
    show_in_navigation: true,
    link: {
      text: 'Contact Us',
      url: '/contact'
    }
  },
  {
    show_in_navigation: true,
    link: {
      text: 'About',
      url: '/about'
    }
  },
  {
    show_in_navigation: false,
    link: {
      text: 'Causes',
      url: '/causes'
    }
  }
];
export const MainNavigationComponent = () => {
  return (
    <MainNavigation
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
