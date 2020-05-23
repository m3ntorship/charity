import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Widget } from '../components/shared/Widget';

export default {
  title: 'Widget',
  component: Widget,
  decorators: [withKnobs]
};

const title = 'Title';
const children = <div className="text-lg py-5">Content</div>;

export const WidgetComponent = () => {
  return (
    <Widget
      title={title}
      children={children}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
