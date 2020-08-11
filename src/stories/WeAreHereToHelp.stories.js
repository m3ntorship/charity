import React from 'react';
import WeAreHereToHelp from '../components/WeAreHereToHelpSection';

export default {
  title: 'We Are Here To Help Section',
  component: WeAreHereToHelp
};

const data = {
  title: 'We Are Here To Help Everyone in Need',
  desc:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  sideImg: 'https://i.imgur.com/PZDBVAa.png ',
  sideTitle: 'Chairty Theme',
  sectionImg: 'https://i.imgur.com/3YrALP9.jpg',
  desc_1: 'Worldwide donation, Any destination you are looking for',
  desc_2: 'Our only mission is to fulfill others dreams are in need',
  icon_1: 'https://i.imgur.com/mJ2RPbu.png',
  icon_2: 'https://i.imgur.com/VQtsW6U.png'
};

export const WeAreHereToHelpComponent = () => {
  return <WeAreHereToHelp data={data} />;
};
