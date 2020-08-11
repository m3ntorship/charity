import React from 'react';
import CallToVolunteer from '../components/CallToVolunteerSection';

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
      logoBg: 'https://i.imgur.com/F2NIO9g.png'
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
      cardTitle: 'Get Involved',
      cardDesc: 'Lorem ium dolor sit ametad pisicing elit sed do ut.',
      cardLogo: 'https://i.imgur.com/m2uyZgz.png',
      logoBg: 'https://i.imgur.com/F2NIO9g.png'
    }
  ],
  cardBgColor: [
    { cardBg: '#d55342' },
    { cardBg: '#3d9c85' },
    { cardBg: '#efc94c' },
    { cardBg: '#4878ce' }
  ]
};

export const CallToVolunteerComponent = () => {
  return <CallToVolunteer data={data} />;
};
