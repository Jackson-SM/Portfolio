import { TopSections } from '../../../../components/TopSections';
import { styled } from '../../../../config/stitches.config';

export const ContainerSectionSkills = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const TopContainerSkills = styled(TopSections, {
  display: 'flex',
  justifyContent: 'space-between',
});
