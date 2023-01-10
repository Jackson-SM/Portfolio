import { styled } from '../../../../config/stitches.config';

export const ContainerSectionTwo = styled('div', {
  padding: '10px 40px 10px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const TopContainerSectionTwo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const ContentSectionTwo = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: 10,

  '@large': {
    flexDirection: 'column',
    alignItems: 'start',
  },

  '@medium': {
    alignItems: 'center',
  },
});

export const ContentSkillsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});
