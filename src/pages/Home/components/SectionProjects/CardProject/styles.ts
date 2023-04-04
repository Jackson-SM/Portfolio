import { keyframes, styled } from '../../../../../config/stitches.config';

export const StyledCardProject = styled('div', {
  width: 300,
  height: 150,
  background: '$background',
  padding: 10,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  margin: '0 auto',

  borderRadius: '5px',

  boxShadow: `4px 4px 10px 2px rgba(106, 106, 106, 0.27)`,

  '&:hover span': {
    color: '$primaryLight',
  },

  '&:hover .icon-container-card': {
    pointerEvents: 'auto',
  },
  '&:hover .icon-card': {
    marginTop: '0',
    opacity: 1,
  },
});

export const TitleCardProject = styled('span', {
  fontSize: '22px',
  color: '$textDark',

  transition: 'color ease 130ms',
});

export const IconContainerCard = styled('div', {
  display: 'flex',
  gap: 10,

  '& svg': {
    width: 28,
    height: 28,
  },

  pointerEvents: 'none',
});

export const StyledIcons = styled('div', {
  display: 'flex',
  borderRadius: '50%',
  overflow: 'hidden',

  opacity: 0,
  marginTop: '-40px',
  transition: 'all ease',
});

export const LinkCardProject = styled('a', {
  fontSize: '$2',

  display: 'flex',
  alignItems: 'center',

  gap: 5,
  width: 'max-content',

  textDecoration: 'none',
  color: '$textDark',

  transition: 'color ease 200ms',

  '&:hover': {
    color: '$primary',
  },
});
