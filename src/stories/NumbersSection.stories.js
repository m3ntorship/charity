import React from 'react';
import NumbersSection from '../components/NumbersSection';

export default {
  title: 'Numbers Section',
  component: NumbersSection
};

const data = {
  sectionTitle: 'Numbers',
  subTitle: 'Speacks',
  numbersData: [
    {
      text: '88k',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      color: 'red'
    },
    {
      text: '70+',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      color: 'green'
    },
    {
      text: '66k',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      color: 'yellow'
    }
  ]
};

export const NumbersSectionShowcase = () => {
  return <NumbersSection data={data} />;
};
