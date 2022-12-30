import { styled } from '../../../../config/stitches.config';

export const ContainerSectionAboutMe = styled('div', {
  padding: '10px 40px 10px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const TopSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const ContainerSkillsIndividualCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 20,

  '@medium': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});
