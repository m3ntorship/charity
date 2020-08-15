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

export const IconToRight = () => {
  return (
    <IconWithTextItem
      textTemplate="Worldwide donation, Any
    destination you are looking for"
      textAlign="right"
      iconAlign="left"
      paragraphStart="start"
      iconStart="end"
      data={data}
    />
  );
};

export const IconToLeft = () => {
  return (
    <IconWithTextItem
      textTemplate="Worldwide donation, Any
    destination you are looking for"
      textAlign="right"
      paragraphStart="end"
      iconStart="start"
      data={data}
    />
  );
};
