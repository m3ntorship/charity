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
    _id: '5ea860eafd37db00172c73fe',
    title: 'needhelp@lovims.com',
    sub_title: 'Email address',
    createdAt: '2020-04-28T16:59:22.541Z',
    updatedAt: '2020-05-11T00:12:23.639Z',
    __v: 0,
    icon: {
      _id: '5eb08cf55f16e80017089257',
      name: 'email-icon',
      alternativeText: '',
      caption: '',
      hash: 'email-icon_9436ef3825',
      ext: '.png',
      mime: 'image/png',
      size: 0.71,
      width: 30,
      height: 28,
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/email-icon_9436ef3825.png',
      provider: 'aws-s3',
      related: ['5ea860eafd37db00172c73fe'],
      createdAt: '2020-05-04T21:45:25.321Z',
      updatedAt: '2020-05-11T00:12:11.198Z',
      __v: 0,
      formats: {},
      id: '5eb08cf55f16e80017089257'
    },
    url: 'mailto:needhelp@lovims.com',
    id: '5ea860eafd37db00172c73fe'
  },
  {
    _id: '5ea8611afd37db00172c7400',
    title: ' 666 888 6666',
    sub_title: 'Phone line',
    createdAt: '2020-04-28T17:00:10.221Z',
    updatedAt: '2020-05-11T00:14:53.956Z',
    __v: 0,
    icon: {
      _id: '5eb08d155f16e80017089259',
      name: 'phone-iconpng',
      alternativeText: '',
      caption: '',
      hash: 'phone-iconpng_11d0269061',
      ext: '.png',
      mime: 'image/png',
      size: 0.86,
      width: 30,
      height: 30,
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/phone-iconpng_11d0269061.png',
      provider: 'aws-s3',
      related: ['5ea8611afd37db00172c7400'],
      createdAt: '2020-05-04T21:45:57.279Z',
      updatedAt: '2020-05-11T00:14:53.886Z',
      __v: 0,
      formats: {},
      id: '5eb08d155f16e80017089259'
    },
    url: 'tel: 666 888 6666',
    id: '5ea8611afd37db00172c7400'
  },
  {
    _id: '5ea86143fd37db00172c7402',
    title: '66 Broklyn Street USA',
    sub_title: 'Visit us',
    createdAt: '2020-04-28T17:00:51.661Z',
    updatedAt: '2020-05-11T00:15:17.092Z',
    __v: 0,
    icon: {
      _id: '5eb08d345f16e8001708925b',
      name: 'location-icon',
      alternativeText: '',
      caption: '',
      hash: 'location-icon_f9630aee60',
      ext: '.png',
      mime: 'image/png',
      size: 0.81,
      width: 24,
      height: 32,
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/location-icon_f9630aee60.png',
      provider: 'aws-s3',
      related: ['5ea86143fd37db00172c7402'],
      createdAt: '2020-05-04T21:46:28.495Z',
      updatedAt: '2020-05-11T00:15:12.564Z',
      __v: 0,
      formats: {},
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
