import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Testimonials } from '../components/Testimonials';

export default {
  title: 'Testimonials',
  component: Testimonials,
  decorators: [withKnobs]
};

const data = {
  testimonials: [
    {
      _id: '5eab381abe39497f60869190',
      body:
        'This is due to their excellent service, competitive pricing, and customer support. It’s thoroughly refreshing to get such a personal touch.\n\n',
      author: 'Christine Rose',
      link: {
        _id: '5eab381abe39497f60869191',
        text: 'Feedback',
        url: '#Feedback'
      },
      image: {
        _id: '5eb89cd70e79a21caf96f72e',
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/1073-90x90_6ddffe873e_ac43c1196e.jpeg'
      }
    },
    {
      _id: '5eab38d9be39497f60869196',
      body:
        "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: '7azal2om',
      link: {
        _id: '5eab38d9be39497f60869197',
        text: 'la tarago3 wla istislam',
        url: 'https://elcinema.com/work/1540841/'
      },
      image: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_ukxpns7i8p0b0tf49odk_400x400_482554d9f1_c7495584f3.jpeg'
      }
    }
  ],
  _id: '5eab37c9be39497f6086918b',
  Description:
    'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.',
  Heading: {
    heading_primary: 'What They Are ',
    heading_secondary: 'Saying?'
  },
  id: '5eab37c9be39497f6086918b'
};

export const TestimonialsComponent = () => {
  return (
    <Testimonials
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
