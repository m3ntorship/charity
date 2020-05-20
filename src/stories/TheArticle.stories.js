import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ArticleContainer from '../components/ArticleDetails';

export default {
  title: 'Article',
  component: ArticleContainer,
  decorators: [withKnobs]
};

const data = {
  id: '1',
  headline: 'Water Need in Africa',
  body_text:
    'venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisltristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolorsemper, non porttitor nisl fermentum.',
  img: [
    {
      primary: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/02_92230e6890_58f36845c2.png'
      },
      secondary: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/01_a77c3e587e_4b2becc5b6.png'
      }
    }
  ],
  conclusion_text:
    'Lorem ipsum dolor sit amet, consectetur notted adipisi cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};
  


export const ArticlePage = () => {
  return (
    <ArticleContainer
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />  
  );
};



