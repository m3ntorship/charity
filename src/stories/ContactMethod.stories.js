/* jshint ignore: start */
import React from 'react';
import ContactMethod from '../components/VolunteersContactMethods/index';

export default {
  title: 'Volunteers Contact Method',
  component: ContactMethod
};

const data = {
  imgUrl:
    'https://s3.m3ntorship.net/charity-cms-dev/phone-iconpng_11d0269061_fddcc29a57.png',
  title: 'Visit Us',
  address: '66 Broklyn St, New York, USA'
};

export const ContactMethodComponent = () => {
  return <ContactMethod data={data} />;
};
