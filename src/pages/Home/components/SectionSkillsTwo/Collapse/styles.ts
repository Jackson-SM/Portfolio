import { styled } from '../../../../../config/stitches.config';

export const CollapseCollections = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  justifyContent: 'space-around',
});

export const ContentSkillsBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  position: 'relative',

  overflow: 'visible',
  maxHeight: '100%',

  '&::before': {
    content: '',

    position: 'absolute',

    background: '$backgroundLight2',
    width: 2,
    height: '100%',

    top: '0',
    left: '100%',

    zIndex: '1',
  },

  variants: {
    collapsed: {
      true: {
        maxHeight: '0',
        overflow: 'hidden',
      },
    },
  },
});
