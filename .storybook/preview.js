import { Global } from '@emotion/react';
import React from 'react';

import GlobalStyles from '../src/lib/theme/global-styles';

const Decorator = (Story, context) => (
  <div id="__wrapper">
    <Global styles={GlobalStyles} />
    <Story />
  </div>
);

export const decorators = [Decorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
