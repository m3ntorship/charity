import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import '../src/css/tailwind.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: DEFAULT_VIEWPORT
  }
});
