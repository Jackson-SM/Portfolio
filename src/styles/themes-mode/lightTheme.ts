import { createTheme } from '../../config/stitches.config';

export const lightTheme = createTheme('light-theme', {
  colors: {
    primary: 'hsl(350, 74%, 51%)',
    primaryLight: 'hsl(350, 89%, 62%)',

    secundary: 'hsl(87, 82%, 60%)',
    secundaryLight: 'hsl(87, 90%, 70%)',

    tertiary: 'hsl(161, 73%, 63%)',
    tertiaryLight: 'hsl(162, 80%, 76%)',

    background: 'hsl(0, 0%, 85%)',
    backgroundLight: 'hsl(0, 0%, 80%)',
    backgroundLight2: 'hsl(0, 0%, 75%)',

    backgroundTransparence: 'hsl(0, 0%, 15%, 0.9)',
    backgroundTransparence2: 'hsl(0, 0%, 15%, 0.5)',
    backgroundTransparence3: 'hsl(0, 0%, 15%, 0.3)',

    text: 'hsl(0, 0%, 20%)',
    textDark: 'hsl(0, 0%, 10%)',
    textDark2: 'hsl(0, 0%, 30%)',
  },
});
