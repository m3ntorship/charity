import React from 'react';
import IconWithTextItem from '../components/IconWithTextItem';

export default {
  title: 'Icon With Text Item',
  component: IconWithTextItem
};

const data = {
  firstIcon: 'https://i.imgur.com/mJ2RPbu.png',
  secondIcon: 'https://i.imgur.com/VQtsW6U.png'
};

export const IconToLeft = () => {
  return (
    <IconWithTextItem
      spanTitle="Call us anytime"
      textTemplate="666 888 6666"
      fontSize="md"
      fontWeight="bold"
      textColor="grey"
      textAlign="right"
      paragraphStart="start"
      iconStart="end"
      data={data}
    />
  );
};
