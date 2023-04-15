import { keyframes, styled } from '../../../../../config/stitches.config';

export const showUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-30px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

export const StyledCardProject = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,

  position: 'relative',

  color: '$textDark',
  textDecoration: 'none',

  background: '$backgroundLight2',
  borderRadius: '5px',

  zIndex: '1',

  padding: '5px',

  transition: 'filter ease-in 130ms',

  filter: 'brightness(90%)',

  '&:hover': {
    filter: 'brightness(100%)',
  },
});

export const TitleCardProject = styled('span', {
  fontSize: '1.3rem',
});

export const IconContainerCard = styled('div', {
  display: 'flex',

  gap: 20,
});

export const StyledIcons = styled('div', {
  position: 'relative',

  borderRadius: '50%',

  width: 35,
  height: 35,

  background: '$background',
  padding: '5px',

  marginTop: '-25px',

  opacity: 0,
  transform: 'translateX(-30px)',

  '&:last-child': {
    '&::before': {
      display: 'none',
    },
  },

  '& svg': {
    width: '100%',
    height: '100%',
    padding: 5,
  },

  '&::before': {
    content: '',

    position: 'absolute',

    background: '$backgroundLight',

    height: '2px',
    width: '100%',

    top: '50%',
    right: '-100%',
  },
});
