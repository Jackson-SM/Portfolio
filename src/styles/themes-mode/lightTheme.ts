import { createTheme } from '../../config/stitches.config';

export const lightTheme = createTheme('light-theme', {
  colors: {
    primary: 'hsla(269, 82%, 60%, 1)',
    primaryLight: 'hsla(269, 74%, 65%, 1)',

    secondary: 'hsla(192, 100%, 57%, 1)',
    secondaryLight: 'hsla(192, 100%, 73%, 1)',

    tertiary: 'hsla(281, 100%, 56%, 1)',
    tertiaryLight: 'hsla(281, 100%, 74%, 1)',
    background: 'hsla(246, 100%, 98%, 1)',
    backgroundLight: 'hsla(196, 0%, 96%, 1)',
    backgroundLight2: 'hsla(196, 0%, 98%, 1)',

    backgroundTransparence: 'hsl(0, 0%, 15%, 0.9)',
    backgroundTransparence2: 'hsl(0, 0%, 15%, 0.5)',
    backgroundTransparence3: 'hsl(0, 0%, 15%, 0.3)',

    text: 'hsl(0, 0%, 20%)',
    textDark: 'hsl(0, 0%, 10%)',
    textDark2: 'hsl(0, 0%, 30%)',
  },
});
