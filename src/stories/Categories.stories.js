import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { CategoriesWidget } from '../components/Widgets';

export default {
  title: 'Categories',
  component: CategoriesWidget,
  decorators: [withKnobs]
};

const data = {
  title: 'Categories',
  categories: [
    { id: 4650763476, title: 'Health & Medical', number: 93 },
    { id: 4656333476, title: 'Social Welfare', number: 24 },
    { id: 4685363476, title: 'Health & Medical', number: 15 }
  ]
};

export const CategoriesWidgetComponent = () => {
  return (
    <CategoriesWidget
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
