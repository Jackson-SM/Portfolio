import { styled } from '../../../../../config/stitches.config';

export const StyledSkillIndividualCard = styled('div', {
  /*   linearGradient: 'to right,transparent 90%, $primary',
  border: '2px solid $backgroundLight'
  */
  maxWidth: '400px',
  borderRadius: 5,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  overflow: 'hidden',

  fontSize: 15,

  '@large': {},
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
  /* background: 'linear-gradient(to right,$textDark 80%,$primary)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent', */
});
