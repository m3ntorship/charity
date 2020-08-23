import React from 'react';
import CardItem from '../components/CardComponent';

export default {
  title: 'Card Component',
  component: CardItem
};

const data = {
  firstIcon: 'https://i.imgur.com/LEo5AzN.png',
  secondIcon: 'https://i.imgur.com/rWpqruh.png'
};

export const cardItem = () => {
  return (
    <CardItem
      cardTitle="Raise Funds for Saving Animals"
      cardBodyDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      raisedAmount="$25,270"
      targetedAmount="$30,000"
      btnText="Donate Now"
      data={data}
    />
  );
};
