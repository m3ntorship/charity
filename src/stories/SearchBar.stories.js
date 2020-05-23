import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { SearchBar } from '../components/shared/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
  decorators: [withKnobs]
};

export const SearchBarComponent = () => {
  return <SearchBar />;
};
