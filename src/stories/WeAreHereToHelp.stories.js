import React from 'react';
import WeAreHereToHelp from '../components/WeAreHereToHelpSection';

export default {
  title: 'We Are Here To Help Section',
  component: WeAreHereToHelp
};

const data = {
  title: 'We Are Here To Help Everyone in Need',
  desc:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
};

export const WeAreHereToHelpComponent = () => {
  return <WeAreHereToHelp data={data} />;
};
