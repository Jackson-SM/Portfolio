import { styled } from '../../../../config/stitches.config';

export const ContainerSectionProjects = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  padding: 10,
});
export const ContentSectionProjects = styled('div', {
  padding: 20,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: 20,
  zIndex: '1',
});
