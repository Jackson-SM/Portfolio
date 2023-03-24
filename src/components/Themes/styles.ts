import { styled } from '../../config/stitches.config';

export const StyledTheme = styled('div', {
  position: 'fixed',
  top: '50%',
  right: 0,

  background: '$backgroundTransparence',

  padding: 5,
  paddingRight: 10,
  paddingTop: 8,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 10,

  transition: 'transform ease 130ms',

  '& > span': {
    color: '$text',
    fontSize: '$2',
  },

  variants: {
    visible: {
      true: {
        transform: 'translateX(100%)',

        '& .hide-button': {
          transform: 'translateX(-100%)',
          left: 0,
        },
      },
    },
  },
});
export const ThemesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});
export const StyledThemeBox = styled('button', {
  width: 30,
  height: 30,

  outline: 'none',
  border: 'none',

  cursor: 'pointer',

  borderRadius: '50%',

  transition: 'transform ease 130ms',

  '&:hover': {
    transform: 'translateX(-10px)',
  },
});

export const HideThemeBox = styled('button', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$primary',
  outline: 'none',
  border: 'none',

  top: '-30px',
  right: '10px',

  cursor: 'pointer',

  borderRadius: '50%',
  padding: 5,

  '& svg': {
    width: 20,
    height: 20,
    color: 'white',
  },
});
