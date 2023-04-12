import { keyframes, styled } from '../../../../../config/stitches.config';

export const StyledCardProject = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
});

export const TitleCardProject = styled('span', {});

export const IconContainerCard = styled('div', {
  display: 'flex',

  gap: 20,

  '& .icon-card': {
    background: 'red',
  },
});

export const StyledIcons = styled('div', {
  position: 'relative',

  borderRadius: '50%',

  width: 30,
  height: 30,

  '& svg': {
    width: 30,
    height: 30,
    padding: 5,
  },

  zIndex: '-1',

  '&::before': {
    content: '',

    zIndex: '-1',

    position: 'absolute',

    background: '$backgroundLight',

    height: '2px',
    width: '100%',

    top: '50%',
    right: '-100%',
  },
});
