import React from 'react';
import CallToVolunteerCard from '../components/CallToVolunteerCard';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Call To Volunteer Card',
  component: CallToVolunteerCard,
  decorators: [withKnobs]
};

const data = {
  cardTitle: 'Become a Volunteer',
  cardDesc: 'Lorem ium dolor sit ametad pisicing elit sed do ut.',
  cardLogo: 'https://i.imgur.com/beBJVo9.png',
  logoBg: 'https://i.imgur.com/zdCqalZ.png'
};

// export const CallToVolunteerCardComponent = () => {
//   return (
//     <CallToVolunteerCard
//       cardTitle={text('Card Title', 'Become a Volunteer')}
//       cardDesc={text(
//         'Description',
//         'Lorem ium dolor sit ametad pisicing elit sed do ut.'
//       )}
//       cardTitleColor={text('Card Title Color', 'dark')}
//       data={data}
//     />
//   );
// };

export const CallToVolunteerCardComponent = () => {
  return <CallToVolunteerCard data={data} />;
};
