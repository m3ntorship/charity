import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Logo } from '../components/Logo';


export default {
  title: 'Logo',
  component: Logo,
  decorators: [withKnobs]
};

const data = {
  logo: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/logo_eba40dfa8c.png',
    id: '5ea50b81186dd70017900752'
  },
  id: '5ea50b84186dd70017900753'
};
export const LogoComponent = () => {
  return (
    <Logo
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
