import React from 'react';
import CallToVolunteerCard from '../components/CallToVolunteerCard';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Call To Volunteer Card',
  component: CallToVolunteerCard,
  decorators: [withKnobs]
};

const data = {
  cardLogo: 'https://i.imgur.com/beBJVo9.png'
};

export const CallToVolunteerCardComponent = () => {
  return (
    <CallToVolunteerCard
      cardTitle={text('Card Title', 'Become a Volunteer')}
      cardDesc={text(
        'Description',
        'Lorem ium dolor sit ametad pisicing elit sed do ut.'
      )}
      cardTitleColor={text('Card Title Color', 'dark')}
      data={data}
    />
  );
};
