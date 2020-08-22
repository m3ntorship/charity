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
  contactIcon: 'https://i.imgur.com/1nEDxnz.png',
  contactTitle: 'Call Us Anytime',
  contactInfo: '666 - 888 - 666',
  sectionBg: 'https://i.imgur.com/7mfp5kF.png',
  formDesc:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id iste tempore molestiae tempora totam.',
  donationAmount: '$200',
  targetAmount: '$500',
  btnText: 'Donate Now'
};

export const OurMissionComponent = () => {
  return <OurMission data={data} />;
};
