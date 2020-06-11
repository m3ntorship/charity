import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import HeaderNavigation from '../components/HeaderNavigation';

export default {
  title: 'HeaderNavigation',
  component: HeaderNavigation,
  decorators: [withKnobs]
};

const pagesData = [
  {
    show_in_navigation: true,
    link: {
      text: 'Home',
      url: '/'
    }
  },
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
      text: 'News',
      url: '/news'
    }
  },
  {
    show_in_navigation: true,
    link: {
      text: 'Contact',
      url: '/contact'
    }
  }
];

const contactData = [
  {
    title: 'needhelp@lovims.com',
    sub_title: 'Email address',
    icon: {
      name: 'email-icon',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/email-icon_9436ef3825.png',

      id: '5eb08cf55f16e80017089257'
    },
    url: 'mailto:needhelp@lovims.com',
    id: '5ea860eafd37db00172c73fe'
  },
  {
    _id: '5ea8611afd37db00172c7400',
    title: ' 666 888 6666',
    sub_title: 'Phone line',
    icon: {
      name: 'Phone',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/phone-iconpng_11d0269061.png'
    },
    url: 'tel: 666 888 6666',
    id: '5ea8611afd37db00172c7400'
  },
  {
    _id: '5ea86143fd37db00172c7402',
    title: '66 Broklyn Street USA',
    sub_title: 'Visit us',
    icon: {
      name: 'adress',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/location-icon_f9630aee60.png'
    },
    url: 'https://github.com/m3ntorship/charity/',
    id: '5ea86143fd37db00172c7402'
  }
];

export const HeaderNavigationComponent = () => {
  return (
    <HeaderNavigation
      pagesData={pagesData}
      contactData={contactData}
      pagesLoading={boolean('pages loading', false)}
      contactLoading={boolean('contact loading', false)}
      pagesError={boolean('error', false)}
      contactError={boolean('error', false)}
    />
  );
};
