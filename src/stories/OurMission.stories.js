import React from 'react';
import OurMission from '../components/OurMissionSection';

export default {
  title: 'Our Mission Section',
  component: OurMission
};

const data = {
  main_title: "We're on a Mission to Solve All the",
  sub_title: 'Problems',
  desc:
    'As we start to build Task, we first write our test states that correspond to the different types of tasks sketched above. Then we use Storybook to build the component in isolation using mocked data. We’ll manually test the component’s appearance given each state as we go.',
  imgUrl:
    'https://s3.m3ntorship.net/charity-cms-dev/phone-iconpng_11d0269061_fddcc29a57.png',
  title: 'Visit Us',
  address: '66 Broklyn St, New York, USA'
};

export const OurMissionComponent = () => {
  return <OurMission data={data} />;
};
