import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Location, InfoWithIcon } from '../components/ContactLocations';

export default {
  title: 'Location',
  component: Location,
  decorators: [withKnobs]
};

const locationData = {
  _id: '5eeb43ac44c2ee034cf2f74b',
  city: 'Alexandria',
  location: {
    _id: '5eeb43ac44c2ee034cf2f74c',
    info: '25 ST Fouad,Sharq,Alexandria,Egypt',
    createdAt: '2020-06-18T10:36:28.428Z',
    updatedAt: '2020-06-18T10:36:28.664Z',
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
      related: [
        '5ea86143fd37db00172c7402',
        '5eeb43ac44c2ee034cf2f74c',
        '5eeb44b644c2ee034cf2f756',
        '5eeb455c44c2ee034cf2f760'
      ],
      createdAt: '2020-05-04T21:46:28.495Z',
      updatedAt: '2020-06-18T10:43:40.969Z',
      __v: 0,
      formats: {},
      id: '5eb08d345f16e8001708925b'
    },
    id: '5eeb43ac44c2ee034cf2f74c'
  },
  email: {
    _id: '5eeb43ac44c2ee034cf2f74f',
    info: 'alexandriaCharity@email.com',
    info_title: 'Email Address',
    createdAt: '2020-06-18T10:36:28.978Z',
    updatedAt: '2020-06-18T10:36:29.213Z',
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
      related: [
        '5ea860eafd37db00172c73fe',
        '5eeb43ac44c2ee034cf2f74f',
        '5eeb44b744c2ee034cf2f759',
        '5eeb455d44c2ee034cf2f763'
      ],
      createdAt: '2020-05-04T21:45:25.321Z',
      updatedAt: '2020-06-18T10:43:41.468Z',
      __v: 0,
      formats: {},
      id: '5eb08cf55f16e80017089257'
    },
    id: '5eeb43ac44c2ee034cf2f74f'
  },
  phone: {
    _id: '5eeb43ad44c2ee034cf2f752',
    info: '03 343 324233',
    info_title: 'Phone Number',
    createdAt: '2020-06-18T10:36:29.497Z',
    updatedAt: '2020-06-18T10:36:29.734Z',
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
      related: [
        '5ea8611afd37db00172c7400',
        '5eeb43ad44c2ee034cf2f752',
        '5eeb44b744c2ee034cf2f75c',
        '5eeb455d44c2ee034cf2f766'
      ],
      createdAt: '2020-05-04T21:45:57.279Z',
      updatedAt: '2020-06-18T10:43:41.982Z',
      __v: 0,
      formats: {},
      id: '5eb08d155f16e80017089259'
    },
    id: '5eeb43ad44c2ee034cf2f752'
  },
  createdAt: '2020-06-18T10:36:28.341Z',
  updatedAt: '2020-06-18T10:36:29.954Z',
  __v: 3,
  id: '5eeb43ac44c2ee034cf2f74b'
};

const infoAboutPhoneData = {
  info: '03 343 324233',
  info_title: 'Phone Number',
  icon: {
    name: 'phone-iconpng',
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/phone-iconpng_11d0269061.png'
  },
  id: '5eeb43ad44c2ee034cf2f752'
};

export const LocationComponent = () => {
  const { city, email, location, phone, id } = locationData;
  return (
    <Location
      city={city}
      email={email}
      location={location}
      phone={phone}
      key={id}
      contactLoading={boolean('Contact Loading', false)}
    />
  );
};

export const InfoWithIconComponent = () => {
  const { icon, info } = infoAboutPhoneData;
  return <InfoWithIcon icon={icon.url} infoTitle="Phone line" info={info} />;
};
