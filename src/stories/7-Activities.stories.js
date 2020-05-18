import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Activities } from '../components/Activities';

export default {
  title: 'Activities',
  component: Activities,
  decorators: [withKnobs]
};

const data = {
  title_primary: 'We Save More ',
  title_complementary: 'Lives',
  description:
    'Lorem ipsum dolor sit amet, consectetur notted adipisi cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  how_we_work_cards: [
    {
      Title: 'We Help',
      description:
        'Lorem ipsum is simply free text available in market wesbites.',

      image_main: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/02_92230e6890_58f36845c2.png'
      },
      image_main_hover: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/01_a77c3e587e_4b2becc5b6.png'
      }
    },
    {
      Title: 'We Build',
      description:
        'Lorem ipsum is simply free text available in market wesbites.',
      image_main: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/01_a77c3e587e_4b2becc5b6.png'
      },
      image_main_hover: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/01_a77c3e587e_4b2becc5b6.png'
      }
    },
    {
      Title: 'We Educate',
      description:
        'Lorem ipsum is simply free text available in market wesbites.',

      image_main: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/04_074af00212_d801d99c02.png'
      },
      image_main_hover: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/04_074af00212_d801d99c02.png'
      }
    },
    {
      Title: 'We Nourish',
      description:
        'Lorem ipsum is simply free text available in market wesbites.',

      image_main: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/03_c2b8c9523c_87509c69e4.png'
      },
      image_main_hover: {
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/03_c2b8c9523c_87509c69e4.png'
      }
    }
  ]
};
export const ActivitiesComponent = () => {
  return (
    <Activities
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
