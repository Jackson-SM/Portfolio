import { styled } from '../../../../config/stitches.config';

export const ContainerHero = styled('div', {
  padding: 20,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row-reverse',
  gap: 20,

  height: 'calc(100vh - 60px)',

  '@large': {
    flexDirection: 'column-reverse',
    gap: 50,
    height: 'auto',
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
