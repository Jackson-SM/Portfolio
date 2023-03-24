import { keyframes, styled } from '../../../../config/stitches.config';

export const ContainerHero = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',

  padding: 20,

  height: 'calc(100vh - 60px)',

  background:
    'radial-gradient(circle at 18% 30%,$primary, transparent, transparent, transparent, transparent, transparent)',

  '@large': {
    flexDirection: 'column',
    gap: 50,
    height: 'auto',
    background: 'radial-gradient(circle at 50% 20%,$primary, transparent, transparent, transparent)',
  },
});

export const ContentHero = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row-reverse',
  gap: 20,

  '@large': {
    flexDirection: 'column-reverse',
    background: 'radial-gradient(circle at 50% 20%,$primary, transparent, transparent, transparent)',
  },
});

export const ContainerInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
});

export const ContainerApresentation = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  flexBasis: '50%',

  gap: 20,

  '@large': {
    textAlign: 'center',

    '& h1': {
      fontSize: '$5',
    },

    '& span': {
      fontSize: '$2',
    },
  },
});

export const StyledPhoto = styled('img', {
  width: '300px',

  borderRadius: '100%',

  padding: 0,
  margin: 0,

  '@large': {
    width: '200px',
  },
});

export const ContainerNetworks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 5,

  gap: 10,
  padding: 5,

  '& svg': {
    color: '$primary',

    width: 22,
    height: 22,
  },

  '@large': {
    flexDirection: 'row',
    padding: 10,
  },
});

export const ContainerPersonInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ContainerStacks = styled('div', {
  display: 'flex',
  gap: 30,
  justifyContent: 'center',

  '@large': {
    gap: 10,
  },
});

export const showIcon = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(40px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

export const IconStack = styled('div', {
  padding: 10,
  display: 'flex',
  borderRadius: '50%',

  opacity: 0,
  transform: 'translateX(80px)',

  transition: 'background ease 200ms',

  '&:hover': {
    background: '$backgroundLight',
  },

  '& img': {
    width: 40,
    height: 40,

    '@large': {
      width: 30,
      height: 30,
    },
  },
});
