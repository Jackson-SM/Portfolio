import { styled } from '../../../../config/stitches.config';

export const ContainerHero = styled('div', {
  padding: 20,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row-reverse',
  gap: 20,

  '@large': {
    flexDirection: 'column',
  },
});

export const ContainerInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexBasis: '50%',
  gap: 20,
});

export const ContainerApresentation = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexBasis: '50%',
  width: '100%',

  '@large': {
    flexDirection: 'column-reverse',
  },
});

export const ContainerApresentationInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  flexBasis: '50%',

  '@large': {
    textAlign: 'center',
  },
});

export const StyledPhoto = styled('img', {
  width: 250,
  height: 250,

  borderRadius: '100%',

  padding: 0,
  margin: 0,
});

export const ContainerNetworks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  flexBasis: '50%',

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
