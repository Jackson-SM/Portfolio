import { createStitches } from '@stitches/react';

export const { styled, globalCss, keyframes, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(33, 98%, 50%)',
      primaryLight: 'hsl(33, 82%, 60%)',

      secundary: 'hsl(87, 82%, 60%)',
      secundaryLight: 'hsl(87, 90%, 70%)',

      tertiary: 'hsl(161, 73%, 63%)',
      tertiaryLight: 'hsl(162, 80%, 76%)',

      background: 'hsl(0, 0%, 5%)',
      backgroundLight: 'hsl(0, 0%, 15%)',

      text: 'hsl(0, 0%, 95%)',
      textDark: 'hsl(0, 0%, 90%)',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '18px',
      4: '24px',
      5: '30px',
    },
    transitions: {
      transitionsLow: 'all ease 130ms',
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      background: `linear-gradient(${value})`,
    }),
  },
  media: {
    large: '(min-width: 1080px)',
    medium: '(min-width: 768px)',
    small: '(max-width: 400px)',
  },
});
