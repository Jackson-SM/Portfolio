import { globalCss } from '../config/stitches.config';

export const GlobalCss = globalCss({
  '@import': [
    'https://fonts.googleapis.com/css2?family=Raleway&display=swap',
    'https://fonts.googleapis.com/css2?family=Quicksand&display=swap',
    'https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap',
    'https://fonts.googleapis.com/css2?family=Mulish:wght@600&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap',
  ],
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontFamily: 'Poppins, sans-serif',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    background: '$background',
    color: '$text',

    '&.scrolled': {
      overflow: 'hidden',
    },
  },
});
