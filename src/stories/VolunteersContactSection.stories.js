/* jshint ignore: start */
import React from 'react';
import VolunteersContactSection from '../components/VolunteersContactSection/VolunteersContactSection';

export default {
  title: 'Volunteers Contact Section',
  component: VolunteersContactSection
};

const data = {
  main_title: 'Have Question ?',
  sub_title: 'Contact Now'
};

export const VolunteersContactSectionComponent = () => {
  return <VolunteersContactSection data={data} />;
};
