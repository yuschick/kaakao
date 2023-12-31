import type { Preview } from '@storybook/react';

import './index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => (a.name === 'Docs' ? -1 : a.name < b.name ? -1 : 1),
    },
  },
};

export default preview;
