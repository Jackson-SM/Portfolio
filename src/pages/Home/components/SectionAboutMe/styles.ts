import { styled } from '../../../../config/stitches.config';

export const ContainerSectionAboutMe = styled('div', {
  padding: 10,
});

export const TopSectionAboutMe = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContainerSkillsIndividualCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 20,
  padding: 40,

  '@medium': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});
