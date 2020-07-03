import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import EventHeader from './../components/EventHeader/index';

export default {
  title: 'EventHeader',
  component: EventHeader,
  decorators: [withKnobs]
};
const date = '2022-09-07T12:00:00.000Z';
const image =
  'https://gx0ri2vwi9eyht1e3iyzyc17-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/kids-780x390.jpg';
export const EventHader = () => {
  return <EventHeader date={date} image={image} />;
};
