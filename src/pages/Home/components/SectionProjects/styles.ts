import { styled } from '../../../../config/stitches.config';

export const ContainerSectionProjects = styled('section', {});
export const ContentSectionProjects = styled('div', {
  padding: 20,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: 20,
});
