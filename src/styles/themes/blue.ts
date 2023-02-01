import { createTheme } from '../../config/stitches.config';

export const blueTheme = createTheme('blue-theme', {
  colors: {
    primary: 'hsl(207, 100%, 50%)',
    primaryLight: 'hsl(200, 97%, 53%)',

    secundary: 'hsl(87, 82%, 60%)',
    secundaryLight: 'hsl(87, 90%, 70%)',

    tertiary: 'hsl(161, 73%, 63%)',
    tertiaryLight: 'hsl(162, 80%, 76%)',

    background: 'hsl(0, 0%, 5%)',
    backgroundLight2: 'hsl(0, 0%, 10%)',
    backgroundLight: 'hsl(0, 0%, 15%)',

    backgroundTransparence: 'hsl(0, 0%, 15%, 0.9)',
    backgroundTransparence2: 'hsl(0, 0%, 15%, 0.5)',
    backgroundTransparenc3: 'hsl(0, 0%, 15%, 0.3)',

    text: 'hsl(0, 0%, 95%)',
    textDark: 'hsl(0, 0%, 70%)',
    textDark2: 'hsl(0, 0%, 60%)',
  },
});
