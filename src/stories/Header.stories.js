import React from 'react';
import HeaderSection from '../components/HeaderTwoComponent';

export default {
  title: 'Header Component',
  component: HeaderSection
};

const data = {
  sunTitle: 'Welcome to Lovims Theme',
  title: 'Discover Non-Profit Chairty Platform',
  headerDesc:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime autem quis reprehenderit corrupti ipsum minus voluptatibus aut omnis mollitia? Doloribus cupiditate excepturi.',
  btnTitle: 'View Causes',
  greenBall: 'https://i.imgur.com/04LyZnm.png',
  yelloBall: 'https://i.imgur.com/WifmwSJ.png',
  redBall: 'https://i.imgur.com/hrWuYE5.png',
  blueBall: 'https://i.imgur.com/zH0VhYK.png'
};

export const HeaderShowCase = () => {
  return <HeaderSection data={data} />;
};
