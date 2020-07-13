/* jshint ignore: start */
import React from 'react';
import ContactMethod from '../components/VolunteersContactMethods/ContactMethod';

export default {
  title: 'Volunteers Contact Method',
  component: ContactMethod
};

const data = {
  img_url: 'https://via.placeholder.com/150',
  title: 'Visit Us',
  address: '66 Broklyn St, New York, USA'
};

export const ContactMethodComponent = () => {
  return <ContactMethod data={data} />;
};
