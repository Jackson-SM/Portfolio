import { styled } from '../../config/stitches.config';

export const CarouselContainer = styled('div', {
  position: 'sticky',
  borderRadius: '10px',
  overflowX: 'hidden',
  height: '100%',

  '&.no_scroll': {
    zIndex: '-1',
  },
});
export const CarouselWrapper = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',

  pointerEvents: 'auto',

  height: '100%',

  borderRadius: 5,
  overflow: 'hidden',

  scrollBehavior: 'smooth',
});
export const CarouselItems = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  gap: 5,

  pointerEvents: 'auto',

  transition: 'transform 400ms ease-in-out',
});

export const CarouselItem = styled('div', {
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  pointerEvents: 'auto',

  '@large': {
    width: '100vw',
  },
});

export const ElementsStyleds = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  height: '100%',

  position: 'absolute',

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

  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  zIndex: 999999999,

  background: 'linear-gradient($primary, transparent)',

  outline: 'none',
  border: 'none',

  '& svg': {
    width: 20,
    height: 20,
    color: '$text',
  },

  '@medium': {
    height: 40,
    width: 40,

    '& svg': {
      width: 20,
      height: 20,
    },
  },
});
