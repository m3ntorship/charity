import React from 'react';
import DynamicNumber from '../components/DynamicNumbers';

export default {
  title: 'Dynamic Numbers',
  component: DynamicNumber
};

export const DynamicNumberItem = () => {
  return (
    <DynamicNumber
      text="88k"
      numberColor="green"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing."
    />
  );
};
