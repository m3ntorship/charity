import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Search } from '../components/shared/Search';

export default {
  title: 'Search',
  component: Search,
  decorators: [withKnobs]
};

const data = {
  title: 'Find Whatever'
};

export const SearchComponent = () => {
  return <Search data={data} />;
};
