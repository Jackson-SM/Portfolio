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
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
});
