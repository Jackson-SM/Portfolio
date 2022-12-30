import { createStitches } from '@stitches/react';

export const { styled, globalCss, keyframes, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(342, 79%, 51%)',
      primaryLight: 'hsl(342, 89%, 62%)',

      secundary: 'hsl(87, 82%, 60%)',
      secundaryLight: 'hsl(87, 90%, 70%)',

      tertiary: 'hsl(161, 73%, 63%)',
      tertiaryLight: 'hsl(162, 80%, 76%)',

      background: 'hsl(0, 0%, 5%)',
      backgroundLight: 'hsl(0, 0%, 15%)',

      text: 'hsl(0, 0%, 95%)',
      textDark: 'hsl(0, 0%, 70%)',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '16px',
      4: '26px',
      5: '35px',
      6: '70px',
    },
    transitions: {
      transitionsLow: 'all ease 130ms',
      transitionsMedium: 'all ease 300ms',
      transitionsHard: 'all ease 600ms',
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
  media: {
    large: '(max-width: 900px)',
    medium: '(max-width: 750px)',
    small: '(max-width: 400px)',
  },
});
