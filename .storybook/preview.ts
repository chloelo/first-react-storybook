import type { Preview } from '@storybook/react';
// import { DarkModeProvider } from '../src/context/DarkModeContext';
import '../src/tailwind.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
import { withThemeByDataAttribute } from '@storybook/addon-styling';

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: '',
    attributeName: 'data-theme',
  }),
];
// import { withThemeByClassName } from '@storybook/addon-styling';

// // global level decorator
// export const decorators = [
//   withThemeByClassName({
//     themes: {
//       light: '',
//       dark: 'dark',
//     },
//     defaultTheme: 'light',
//   }),
// ];
