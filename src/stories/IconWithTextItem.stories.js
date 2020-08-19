import React from 'react';
import IconWithTextItem from '../components/IconWithTextItem';

export default {
  title: 'Icon With Text Item',
  component: IconWithTextItem
};

const data = {
  firstIcon: 'https://i.imgur.com/1nEDxnz.png',
  secondIcon: 'https://i.imgur.com/VQtsW6U.png'
};

export const IconToRight = () => {
  return (
    <IconWithTextItem
      textTemplate="Worldwide donation, Any
    destination you are looking for"
      textAlign="left"
      iconAlign="center"
      paragraphStart="start"
      iconStart="end"
      iconBg="true"
      data={data}
    />
  );
};

export const IconToLeft = () => {
  return (
    <IconWithTextItem
      textTemplate="Worldwide donation, Any
    destination you are looking for"
      textAlign="left"
      paragraphStart="end"
      iconStart="start"
      data={data}
    />
  );
};
