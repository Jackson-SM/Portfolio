import { styled } from '../../../../../config/stitches.config';

export const StyledCardProject = styled('div', {
  width: 350,
  height: 300,
  borderRadius: 5,
  padding: 5,

  background: '$backgroundTransparenc3',

  display: 'flex',
  flexDirection: 'column',

  margin: '0 auto',

  '@large': {
    width: '100%',
  },
});
export const CoverProject = styled('div', {
  width: '100%',
  height: '100%',

  maxHeight: '170px',

  borderRadius: 5,
  overflow: 'hidden',

  '& img': {
    height: '100%',
    width: '100%',
  },
});

// Content Component
export const ContentProject = styled('div', {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const TopContentProject = styled('div', {});
export const TitleProject = styled('div', {});

export const BodyContentProject = styled('div', {});
export const StackUseds = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 15,
});
export const StackUsedSpan = styled('span', {
  borderRadius: 3,
  padding: 3,
  fontSize: '$2',
  cursor: 'default',

  display: 'flex',
  alignItems: 'center',
  gap: 5,

  '& svg': {
    width: 15,
    height: 15,
  },
});
