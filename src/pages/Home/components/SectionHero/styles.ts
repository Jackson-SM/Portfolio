import { styled } from '../../../../config/stitches.config';

export const ContainerHero = styled('div', {
  padding: 20,
});

export const ContainerInfo = styled('div', {
  display: 'flex',
  gap: 20,
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

  background: '$backgroundLight',

  borderRadius: 5,

  gap: 10,
  padding: 5,

  '& svg': {
    color: '$primary',

    width: 22,
    height: 22,
  },
});

export const ContainerPersonInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
