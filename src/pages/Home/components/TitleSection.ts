import { styled } from '../../../config/stitches.config';

export const TitleSection = styled('h1', {
  fontFamily: 'Quicksand',
  color: '$textDark',
  fontSize: '45px',

  width: 'max-content',

  zIndex: '-1',

  position: 'relative',

  overflow: 'hidden',

  '&::before': {
    content: '',

    position: 'absolute',

    top: '96%',
    left: 0,

    width: '100%',
    height: '100%',

    background: 'linear-gradient(to right, $textDark, $background)',
  },

  defaultVariants: {
    size: 'sm',
  },

  variants: {
    color: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secundary',
      },
      tertiary: {
        color: '$tertiary',
      },
    },

    size: {
      sm: {
        fontSize: '25px',
      },
      md: {
        fontSize: '40px',
      },
      lg: {
        fontSize: '50px',
      },
    },
  },
});
