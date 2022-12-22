import { TextColor } from '../../../../components/TextColor';
import { styled } from '../../../../config/stitches.config';

export const ContainerSectionAboutMe = styled('div', {
  padding: 10,
});

export const TopSectionAboutMe = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 40,

  '& h1': {
    position: 'relative',

    overflow: 'hidden',

    '&::before': {
      content: '',

      position: 'absolute',

      height: '100%',
      width: '100%',

      left: 0,
      top: '94%',

      background: 'linear-gradient(to right, $primary 30%, transparent)',
    },
  },
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
