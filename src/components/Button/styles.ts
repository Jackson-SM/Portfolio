import { styled } from '../../config/stitches.config';

export const StyledButton = styled('button', {
  textDecoration: 'none',
  color: 'white',
  border: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  outline: 'none',

  '&.nav_minified': {
    zIndex: '-1',
  },

  fontSize: '17px',
  padding: 10,

  cursor: 'pointer',

  transition: 'all ease 130ms',

  position: 'relative',

  background: 'none',

  '& svg': {
    width: '18px',
    height: '18px',
  },

  '&[disabled]': {
    background: '$text',
    '&:hover': {
      background: '$textDark',
    },
  },

  variants: {
    outlined: {
      default: {
        border: '1px solid $background',
        color: '$text',

        '&:hover': {
          background: '$text',
          color: '$background',
        },
      },
      primary: {
        border: '1px solid',
        borderColor: '$primary',
        color: '$text',

        '&:hover': {
          background: '$primary',
          color: 'white',
        },
      },
      secondary: {
        border: '1px solid',
        borderColor: '$secundary',
        color: '$text',

        '&:hover': {
          background: '$secundary',
          color: 'white',
        },
      },
      tertiary: {
        border: '1px solid',
        borderColor: '$tertiary',
        color: '$text',

        '&:hover': {
          background: '$tertiary',
          color: 'white',
        },
      },
    },
    color: {
      default: {
        background: '$text',

        '&:hover': {
          background: `$textDark`,
        },
      },
      primary: {
        background: `$primary`,

        '&:hover': {
          background: '$primaryLight',
        },
      },
      secundary: {
        background: `$secundary`,

        '&:hover': {
          background: `$secundaryLight`,
        },
      },
      tertiary: {
        background: `$tertiary`,

        '&:hover': {
          background: `$tertiaryLight`,
        },
      },
    },

    sizeFont: {
      sm: {
        fontSize: '17px',
      },
      md: {
        fontSize: '20px',
      },
      lg: {
        fontSize: '24px',
      },
    },

    rounded: {
      true: {
        borderRadius: '3px',
      },
    },
  },
});
