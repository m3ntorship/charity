// import React from 'react';
// import { withKnobs, boolean, text } from '@storybook/addon-knobs';


// export default {
//   title: 'Article',
//   component: Article,
//   decorators: [withKnobs]
// };


// export const Article = () => {
//   return (
//    <p>hello articles</p>
//   );
// };


import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
