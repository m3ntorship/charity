import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { UpcomingEventsSection } from '../components/UpcomingEvents';

export default {
  title: 'UpcomingEvents',
  Component: UpcomingEventsSection,
  decorators: [withKnobs]
};

const data = {
  Heading: [
    {
      heading_primary: 'Upcoming ',
      heading_secondary: 'Events'
    }
  ],
  upcoming_events: [
    {
      title: 'Pure water and fresh food',
      address: 'Broklyn Street 40, New York',
      date: '2020-09-07T10:00:00.000Z',
      image: {
        alternativeText: '',
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_eb5234d0f2_a67e8efb99.jpeg'
      },
      user: {
        confirmed: true,
        blocked: false,
        username: 'admin',
        email: 'charity_admin@example.com',
        provider: 'local'
      },
      id: '5ea9f29c0d90be0017d7af83'
    },
    {
      title: 'Safe houses and happy times',
      address: 'Wall street 33, New York',
      date: '2020-06-19T10:00:00.000Z',
      image: {
        alternativeText: '',
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/article-image2_5d2262a3fe_ba31def413.jpeg'
      },
      user: {
        confirmed: true,
        blocked: false,
        username: 'admin',
        email: 'charity_admin@example.com',
        provider: 'local'
      },
      id: '5ea9fc160d90be0017d7afa7'
    }
  ],
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam saepe impedit ab facere incidunt iste dolor vitae aliquam error enim voluptate odit quidem a facilis, molestiae deserunt!'
};

const cardData = {
  cause: {
    title: 'Raise Funds for Saving Poor Kids',
    description: 'Aliq is notum hender erit a augue insu image pellen tes.',
    goal: 10000,
    raised: 9000,
    link: {
      text: 'Donate Now',
      url: '#readmore',
      sort: 0
    },
    image: {
      alternativeText: '',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg'
    }
  }
};

export const UpcomingEventsComponent = () => {
  return (
    <UpcomingEventsSection
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
      cardData={cardData}
      cardLoading={boolean('cardLoading', false)}
      cardError={boolean('cardError', false)}
    />
  );
};
