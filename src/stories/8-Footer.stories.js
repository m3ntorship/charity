import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Footer } from '../components/Footer';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [withKnobs]
};

const data = {
  articles: [
    {
      description: 'A Clean Water Gives More Good Taste',
      date: '2020-04-15T10:00:00.000Z',
      title: 'Water Need in Africa',
      link: {
        text: 'Read more',
        url: '#readmore'
      },

      image: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card3_a56e0bb05d_62e507b91e.jpeg'
      }
    },
    {
      date: '2020-04-15T10:00:00.000Z',
      description: 'A Clean Water Gives More Good Taste',
      title: 'Water Need in Africa',
      link: {
        text: 'Read More',
        url: '#readmore2'
      },

      image: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef_b5daf5114b_ace5db76e1.jpeg'
      }
    }
  ],

  about_button: {
    text: 'Donate Now',
    url: '#'
  },
  links: [
    {
      text: 'About',

      url: '#'
    },
    {
      text: 'Causes',

      url: '#'
    },
    {
      text: 'New Campaign ',

      url: '#'
    },
    {
      text: 'Site Map ',

      url: '#'
    },
    {
      text: 'Events',

      url: '#'
    },
    {
      text: 'Contact ',

      url: '#'
    },
    {
      text: 'Help ',

      url: '#'
    },
    {
      text: 'Privacy Policy ',
      url: '#'
    },
    {
      text: 'Volunteers',

      url: '#'
    }
  ],

  About_title: 'About',
  about_description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam et , cum odio illo hic provident totam!',
  newsletter_description:
    'Sign up now to get daily latest news & updates from us',
  newsletter_title: 'Newsletter',
  Disclaimer: '© Copyright  2020 by m3ntorship.net',
  links_title: 'Links',
  news_title: 'News'
};

export const FooterComponent = () => {
  return (
    <Footer
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
