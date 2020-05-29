import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Article from '../components/Article';

export default {
  title: 'Single Article',
  component: Article,
  decorators: [withKnobs]
};

const data = {
  title: 'Water Need in Africa',
  linkText: 'Read more',
  linkURL: '#readmore',
  imageURL:
    'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_eb5234d0f2_a67e8efb99.jpeg',
  index: 0
};

export const SingleArticleComponent = () => {
  let { title, linkText, linkURL, imageURL, index } = data;
  return (
    <Article
      title={title}
      linkText={linkText}
      linkURL={linkURL}
      imageURL={imageURL}
      index={index}
    />
  );
};
