import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

const Widget = ({ children, title }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>{children}</div>
    </>
  );
};

export default {
  title: 'Widget',
  component: Widget,
  decorators: [withKnobs]
};

const Age = () => {
  return 23;
};

const Name = () => {
  return <div>Asser</div>;
};

const Title = () => {
  return <div>Hello</div>;
};
export const ChildrenComponent = () => {
  return (
    <Widget title="Hello world">
      <Name />
      <Age />
      <Title />
    </Widget>
  );
};
