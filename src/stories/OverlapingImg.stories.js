import React from 'react';
import OverlapingImg from '../components/OverlapingImagesItem';

export default {
  title: 'Overlaping Images Item',
  component: OverlapingImg
};

const data = {
  mainImg: 'https://i.imgur.com/3YrALP9.jpg',
  smallImg: 'https://i.imgur.com/v2ilRqV.jpg'
};

export const OverlapingItem = () => {
  return <OverlapingImg data={data} />;
};
