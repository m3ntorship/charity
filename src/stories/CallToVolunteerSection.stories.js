import React from 'react';
import CallToVolunteer from '../components/CallToVolunteer';

export default {
  title: 'Call To Volunteer Section',
  component: CallToVolunteer
};

const data = {
  cardsData: [
    {
      cardTitle: 'Become a Volunteer',
      cardDesc: 'Lorem ium dolor sit ametad pisicing elit sed do ut.',
      cardLogo: 'https://i.imgur.com/beBJVo9.png',
      logoBg: 'https://i.imgur.com/zdCqalZ.png'
    },
    {
      cardTitle: 'Quick Fundraising',
      cardDesc: 'Lorem ium dolor sit ametad pisicing elit sed do ut.',
      cardLogo: 'https://i.imgur.com/LJGMvez.png',
      logoBg: 'https://i.imgur.com/dhfJE6h.png'
    },
    {
      cardTitle: 'Start Donating',
      cardDesc: 'Lorem ium dolor sit ametad pisicing elit sed do ut.',
      cardLogo: 'https://i.imgur.com/inotEmB.png',
      logoBg: 'https://i.imgur.com/143A6oc.png'
    },
    {
      cardTitle: 'Start Donating',
      cardDesc: 'Lorem ium dolor sit ametad pisicing elit sed do ut.',
      cardLogo: 'https://i.imgur.com/m2uyZgz.png',
      logoBg: 'https://i.imgur.com/F2NIO9g.png'
    }
  ]
};

export const CallToVolunteerComponent = () => {
  return <CallToVolunteer data={data} />;
};
