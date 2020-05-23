import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ArticlesSearch } from '../components/ArticlesSearch';

export default {
  title: 'ArticlesSearch',
  component: ArticlesSearch,
  decorators: [withKnobs]
};

const data = {
  title: 'Find Article'
};

export const ArticlesSearchComponent = () => {
  return <ArticlesSearch data={data} />;
};
