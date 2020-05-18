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
      body:
        'This is due to their excellent service, competitive pricing, and customer support. It’s thoroughly refreshing to get such a personal touch.\n\n',
      author: 'Christine Rose',
      link: {
        text: 'Feedback',
        url: '#Feedback'
      },
      image: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/1073-90x90_6ddffe873e_ac43c1196e.jpeg'
      }
    },
    {
      body:
        "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: '7azal2om',
      link: {
        text: 'la tarago3 wla istislam',
        url: 'https://elcinema.com/work/1540841/'
      },
      image: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_ukxpns7i8p0b0tf49odk_400x400_482554d9f1_c7495584f3.jpeg'
      }
    }
  ],
  Description:'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.',
  Heading: {
    heading_primary: 'What They Are ',
    heading_secondary: 'Saying?'
  },
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
