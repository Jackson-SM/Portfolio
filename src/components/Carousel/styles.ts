import { styled } from '../../config/stitches.config';

export const CarouselContainer = styled('div', {
  position: 'relative',
  borderRadius: '10px',
  overflowX: 'hidden',
  pointerEvents: 'none',
});
export const CarouselWrapper = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',

  height: '100%',

  borderRadius: 5,
  overflow: 'hidden',

  scrollBehavior: 'smooth',

  pointerEvents: 'auto',
});
export const CarouselItems = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  gap: 5,

  transition: 'transform 400ms ease-in-out',
});

export const CarouselItem = styled('div', {
  flex: 'none',
  display: 'flex',

  '@large': {
    width: '50%',
  },
});

export const ElementsStyleds = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'absolute',

  zIndex: 2,

  padding: '10px',
});

export const ContainerIndexCircles = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  gap: 5,
  width: '100%',
  height: '10px',

  alignSelf: 'end',
  justifySelf: 'center',

  position: 'absolute',

  zIndex: 3,
});

export const ButtonNextBack = styled('button', {
  height: '50px',
  width: '50px',

  pointerEvents: 'auto',
  cursor: 'pointer',
  zIndex: '22',

  borderRadius: '50%  ',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient($background, transparent)',

  outline: 'none',
  border: 'none',

  '& svg': {
    width: 20,
    height: 20,
    color: '$text',
  },

  '@medium': {
    height: 25,
    width: 25,

    '& svg': {
      width: 15,
      height: 15,
    },
  },
});
