import { styled } from '../../../../config/stitches.config';
import { IconContainer } from './CardSkill/styles';

IconContainer.toString = () => '.line-skill';

export const ContainerSectionTwo = styled('section', {
  padding: '10px 40px 10px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const ContentSectionTwo = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'start',

  '@large': {
    flexDirection: 'column',
    alignItems: 'center',
  },

  '@medium': {
    alignItems: 'center',
  },
});

export const ContentSkillsTop = styled('div', {
  background: '$background',
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

  boxShadow: `0 0 20px 2px rgba(0, 0, 0, 0.28)`,
  padding: 10,

  position: 'relative',
});
