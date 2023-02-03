import { styled } from '../../../../../config/stitches.config';

export const StyledSkillIndividualCard = styled('div', {
  /*   linearGradient: 'to right,transparent 90%, $primary',
  border: '2px solid $backgroundLight'
  */
  position: 'relative',

  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  margin: '0 auto',

  overflow: 'hidden',

  fontSize: 15,

  padding: 10,

  border: ' 2px solid transparent',
  borderRadius: 10,
  background: 'linear-gradient(to right, $background, $background),linear-gradient(to right, $primary , transparent)',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'padding-box, border-box',

  transition: 'all ease 130ms',

  '@large': {
    margin: '0',
    maxWidth: '100%',
  },

  '&:hover': {
    boxShadow: '0 0 10px 10px $background',
    transform: 'scale(1.04)',
  },
});

export const ContainerIcon = styled('div', {
  linearGradient: '45deg,$primary, transparent',

  width: 'max-content',
  display: 'flex',
  borderRadius: '5px',
  padding: 10,

  '& svg': {
    width: 30,
    height: 30,

    color: '$text',
  },

  '&::before': {
    content: '',
  },
});

export const ContainerContentSkill = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: 5,
});

export const TitleSkillIndividual = styled('h1', {
  fontSize: '1.5em',
  fontFamily: 'Mulish',
  color: '$textDark',
});

export const TextSkillIndividual = styled('p', {
  fontSize: '0.85em',
  color: '$textDark2',
  width: '100%',
  /* background: 'linear-gradient(to right,$textDark 80%,$primary)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent', */
});
