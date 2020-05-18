import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ContactInfo } from '../components/ContactInfo';

export default {
  title: 'ContactInfo',
  component: ContactInfo,
  decorators: [withKnobs]
};

// Data
const socialData = [
  {
    _id: '5ea574f0f66232391cd860a4',
    fontawesome_icons: 'fab fa-facebook-square',
    url: 'www.facebook.com'
  },
  {
    _id: '5ea574faf66232391cd860a5',
    fontawesome_icons: 'fab fa-twitter',
    url: 'www.twitter.com'
  },
  {
    _id: '5ea57503f66232391cd860a6',
    fontawesome_icons: 'fab fa-pinterest-p',
    url: 'www.pinterest.com'
  },
  {
    _id: '5ea5751af66232391cd860a7',
    fontawesome_icons: 'fab fa-instagram',
    url: 'www.instgram.com'
  }
];

const contactData = [
  {
    _id: '5ea860eafd37db00172c73fe',
    title: 'needhelp@lovims.com',
    sub_title: 'Email address',
    icon: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/email-icon_9436ef3825.png'
    },
    url: 'mailto:needhelp@lovims.com'
  },
  {
    _id: '5ea8611afd37db00172c7400',
    title: ' 666 888 6666',
    sub_title: 'Phone line',
    icon: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/phone-iconpng_11d0269061.png'
    },
    url: 'tel: 666 888 6666'
  },
  {
    _id: '5ea86143fd37db00172c7402',
    title: '66 Broklyn Street USA',
    sub_title: 'Visit us',
    icon: {
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/location-icon_f9630aee60.png'
    },
    url: 'https://github.com/m3ntorship/charity/'
  }
];

export const ContactInfoComponent = () => {
  return (
    <ContactInfo
      contactData={contactData}
      socialData={socialData}
      socialError={boolean('Social Error', false)}
      contactError={boolean('Contact Error', false)}
      socialLoading={boolean('Social Loading', false)}
      contactLoading={boolean('Contact Loading', false)}
    />
  );
};
