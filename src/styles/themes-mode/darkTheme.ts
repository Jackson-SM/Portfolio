import { createTheme } from '../../config/stitches.config';

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primary: 'hsl(350, 74%, 51%)',
    primaryLight: 'hsl(350, 89%, 62%)',

    secundary: 'hsl(87, 82%, 60%)',
    secundaryLight: 'hsl(87, 90%, 70%)',

    tertiary: 'hsla(300, 72%, 50%, 1)',
    tertiaryLight: 'hsla(300, 68%, 50%, 1)',

    background: 'hsla(230, 17%, 12%, 1)',
    backgroundLight: 'hsla(230, 9%, 41%, 1)',
    backgroundLight2: 'hsla(230, 10%, 18%, 1)',

    backgroundTransparence: 'hsl(0, 0%, 15%, 0.9)',
    backgroundTransparence2: 'hsl(0, 0%, 15%, 0.5)',
    backgroundTransparenc3: 'hsl(0, 0%, 15%, 0.3)',

    text: 'hsl(0, 0%, 95%)',
    textDark: 'hsl(0, 0%, 70%)',
    textDark2: 'hsl(0, 0%, 60%)',
  },
});
