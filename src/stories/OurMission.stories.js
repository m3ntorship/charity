import React from 'react';
import OurMission from '../components/OurMissionSection';

export default {
  title: 'Our Mission Section',
  component: OurMission
};

const data = {
  mainTitle: "We're on a Mission to Solve All the",
  subTitle: 'Problems',
  desc:
    'As we start to build Task, we first write our test states that correspond to the different types of tasks sketched above. Then we use Storybook to build the component in isolation using mocked data. We’ll manually test the component’s appearance given each state as we go.',
  title: 'Visit Us',
  address: '66 Broklyn St, New York, USA',
  firstIcon: 'https://i.imgur.com/1nEDxnz.png',
  iconBg: 'https://i.imgur.com/pLNRXve.png'
};

export const OurMissionComponent = () => {
  return <OurMission data={data} />;
};
