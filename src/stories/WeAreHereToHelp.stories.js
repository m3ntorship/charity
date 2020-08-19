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
  mainImg: 'https://i.imgur.com/3YrALP9.jpg',
  smallImg: 'https://i.imgur.com/v2ilRqV.jpg',
  verticalTitle: 'Charity Theme',
  firstIcon: 'https://i.imgur.com/mJ2RPbu.png',
  secondIcon: 'https://i.imgur.com/VQtsW6U.png',
  firstDesc: 'Our only mission is to fulfill others dreams are in need',
  secondDesc: 'Our only mission is to fulfill others dreams are in need'
};

export const WeAreHereToHelpComponent = () => {
  return <WeAreHereToHelp data={data} />;
};
