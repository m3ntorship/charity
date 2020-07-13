/* jshint ignore: start */
import React from 'react';
import VolunteersContactTitle from '../components/VolunteersContactInfo/VolunteersContactInfo';

export default {
  title: 'VolunteersContactTitle',
  component: VolunteersContactTitle
};
const data = {
  title: 'Have Question ?',
  subTitle: 'Contact Now',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur notted adipis not icing elit sed do eiusmod tempor incididunt.'
};
export const VolunteersContactTitleComponent = () => {
  return <VolunteersContactTitle data={data} />;
};
