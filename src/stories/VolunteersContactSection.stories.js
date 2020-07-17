/* jshint ignore: start */
import React from 'react';
import VolunteersContactSection from '../components/VolunteersContactSection/index';

export default {
  title: 'Volunteers Contact Section',
  component: VolunteersContactSection
};

const data = {
  main_title: 'Have Question?',
  sub_title: 'Contact Now',
  paragraph:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas orem ipsum dolor sit amet consectetur adipisicing elit.',
  contactMethods: [
    {
      imgUrl:
        'https://s3.m3ntorship.net/charity-cms-dev/location-icon_f9630aee60_8763e5296b.png',
      title: 'Visit Us',
      address: '66 Broklyn Street New York, USA'
    },
    {
      imgUrl:
        'https://s3.m3ntorship.net/charity-cms-dev/email-icon_9436ef3825_63707057b7.png',
      title: 'Email Address',
      address: '66 Broklyn Street New York, USA'
    },
    {
      imgUrl:
        'https://s3.m3ntorship.net/charity-cms-dev/phone-iconpng_11d0269061_fddcc29a57.png',
      title: 'Phone Number',
      address: '66 Broklyn Street New York, USA'
    }
  ]
};

export const VolunteersContactSectionComponent = () => {
  return <VolunteersContactSection data={data} />;
};
