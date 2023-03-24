import { styled } from '../../config/stitches.config';

export const StyledThemeModes = styled('button', {
  position: 'relative',

  width: 60,
  height: 10,

  outline: 'none',
  border: 'none',

  background: '$backgroundLight2',

  cursor: 'pointer',

  borderRadius: '5px',
});
export const CircleThemeMode = styled('div', {
  position: 'absolute',
  padding: 5,
  borderRadius: '50%',

  marginTop: '-25%',
  left: 0,

  display: 'flex',

  background: '$backgroundLight2',

  transition: 'left ease 200ms',

  '& svg': {
    color: '$text',
    width: 20,
    height: 20,
  },

  variants: {
    active: {
      true: {
        left: '60%',
      },
    },
  },
});
