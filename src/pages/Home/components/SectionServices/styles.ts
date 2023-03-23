import { styled } from '../../../../config/stitches.config';

export const ContainerSectionAboutMe = styled('section', {
  padding: '10px 40px 10px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const TopSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContainerSkillsIndividualCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 40,

  padding: 20,

  '@medium': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});
