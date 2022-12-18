import { styled } from '../../../../config/stitches.config';

export const ContainerHero = styled('div', {
  padding: 20,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row-reverse',
  gap: 40,

  '@large': {
    flexDirection: 'column-reverse',
    gap: 50,
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

  maxWidth: '40%',

  gap: 20,

  '@large': {
    maxWidth: '80%',
    textAlign: 'center',
  },
});

export const StyledPhoto = styled('img', {
  width: 300,
  height: 300,

  borderRadius: '100%',

  padding: 0,
  margin: 0,
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
