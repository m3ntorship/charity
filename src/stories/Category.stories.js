import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Category } from '../components/shared/Category';

export default {
  title: 'Category',
  component: Category,
  decorators: [withKnobs]
};

const data = {
  title: 'Best of all category',
  number: 94
};
const { title, number } = data;

export const CategoryComponent = () => {
  return (
    <Category
      title={title}
      number={number}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
