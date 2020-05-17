import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { MainContact } from '../components/MainContact';

export default {
  title: 'MainContact',
  component: MainContact,
  decorators: [withKnobs]
};

const data = [
  {
    title: 'needhelp@lovims.com',
    sub_title: 'Email address',
    icon: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/email-icon_9436ef3825.png'
    },
    url: 'mailto:needhelp@lovims.com',
    id: '5ea860eafd37db00172c73fe'
  },
  {
    title: ' 666 888 6666',
    sub_title: 'Phone line',
    icon: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/phone-iconpng_11d0269061.png',
      id: '5eb08d155f16e80017089259'
    },
    url: 'tel: 666 888 6666',
    id: '5ea8611afd37db00172c7400'
  },
  {
    title: '66 Broklyn Street USA',
    icon: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/location-icon_f9630aee60.png',
      id: '5eb08d345f16e8001708925b'
    },
    url: 'https://github.com/m3ntorship/charity/',
    id: '5ea86143fd37db00172c7402'
  }
];

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
