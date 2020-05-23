import React from 'react';
import ArticleModel from '../../ArticleDetails';
import { VolunteeringBanner } from '../../VolunteeringBanner';
import { Banner } from '../../ArticleBanner';
const bannerData = {
  links: [
    { text: 'Home', url: '#home', id: '1' },
    { text: 'latest news', url: '#latest news', id: '2' }
  ],
  _id: '5eaed8f281864200173c4922',
  intro: 'Make an Impact',
  link: {
    text: 'View Causes',
    url: 'link url'
  },
  heading: {
    heading_primary: 'News & Articles'
  },

  image: {
    name: 'children',

    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
  }
};
const volunterringData = {
  description: 'Best Way ot Make a Difference in the Lives of Others',
  button: {
    title: 'Become Volunteer',
    link: '#'
  }
};
const articleData = {
  id: '1',
  headline: 'Water Need in Africa',
  user_type: 'Admin',
  comments: ['lorem', 'ipsum'],
  body_text: [
    {
      id: '12',
      text:
        'venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisltristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolorsemper, non porttitor nisl fermentum.'
    },
    {
      id: '123',
      text:
        'venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisltristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolorsemper, non porttitor nisl fermentum.'
    },
    {
      id: '1234',
      text:
        'venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisltristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolorsemper, non porttitor nisl fermentum.'
    }
  ],

  img_primary: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
  },
  img_secondary: [
    {
      id: '1',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
    },
    {
      id: '2',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
    }
  ],
  conclusion_text:
    'Lorem ipsum dolor sit amet, consectetur notted adipisi cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod.'
};
export const ArticlePage = () => (
  <div>
    <Banner data={bannerData} />
    <div className="grid grid-cols-12">
      <div className="md:col-span-8">
        <ArticleModel data={articleData} />
      </div>
    </div>
    <VolunteeringBanner data={volunterringData} />
  </div>
);
