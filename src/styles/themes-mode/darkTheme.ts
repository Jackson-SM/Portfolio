import { createTheme } from '../../config/stitches.config';

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primary: 'hsla(269, 82%, 60%, 1)',
    primaryLight: 'hsla(153, 100%, 67%, 1)',

    secondary: 'hsla(192, 100%, 57%, 1)',
    secondaryLight: 'hsla(192, 100%, 73%, 1)',

    tertiary: 'hsla(281, 100%, 56%, 1)',
    tertiaryLight: 'hsla(281, 100%, 74%, 1)',

    background: 'hsl(0, 0%, 5%)',
    backgroundLight2: 'hsl(0, 0%, 10%)',
    backgroundLight: 'hsl(0, 0%, 15%)',

    backgroundTransparence: 'hsl(0, 0%, 15%, 0.9)',
    backgroundTransparence2: 'hsl(0, 0%, 15%, 0.5)',
    backgroundTransparence3: 'hsl(0, 0%, 15%, 0.3)',

    text: 'hsl(0, 0%, 95%)',
    textDark: 'hsl(0, 0%, 70%)',
    textDark2: 'hsl(0, 0%, 60%)',
  },
});
