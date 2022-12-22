import { styled } from '../../../../../config/stitches.config';

export const StyledSkillIndividualCard = styled('div', {
  /*   linearGradient: 'to right,transparent 90%, $primary',
  border: '2px solid $backgroundLight'
  */
  height: 200,
  borderRadius: 5,
  display: 'flex',

  paddingRight: 50,

  fontSize: 15,
});

export const ContainerIcon = styled('div', {
  padding: 5,

  '& svg': {
    width: 40,
    height: 40,

    color: '$primary',
  },
});

export const ContainerContentSkill = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: 10,

  gap: 20,
});

export const TitleSkillIndividual = styled('h1', {
  fontSize: '1.5em',
});

export const TextSkillIndividual = styled('p', {
  fontSize: '0.85em',
  /* background: 'linear-gradient(to right,$textDark 80%,$primary)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent', */
});
