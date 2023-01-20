import { styled } from '../../../../config/stitches.config';

export const ContainerSectionTwo = styled('div', {
  padding: '10px 40px 10px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const ContentSectionTwo = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-around',
  gap: 20,

  padding: 10,

  '@large': {
    flexDirection: 'column',
    alignItems: 'center',
  },

  '@medium': {
    alignItems: 'center',
  },
});

export const ContentSkillsTop = styled('div', {
  background: '$backgroundTransparence2',
  padding: 5,
  margin: 5,
  borderRadius: 5,

  '& svg': {
    position: 'absolute',
    width: 30,
    height: 30,
    top: -10,
    left: '95%',

    color: '$textDark',
  },
});
export const ContentSkillsBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});
export const ContentSkillTitle = styled('h1', {
  color: '$textDark2',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',

  zIndex: '-1',
});

export const ContentSkillsSection = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 350px))',
  gap: 10,
});
