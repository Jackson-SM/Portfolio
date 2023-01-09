import { styled } from '../../config/stitches.config';

export const CarouselContainer = styled('div', {
  position: 'relative',
  borderRadius: '10px',

  maxWidth: '740px',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const CarouselWrapper = styled('div', {
  overflowX: 'hidden',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const CarouselItems = styled('div', {
  display: 'flex',

  transition: 'transform 400ms ease-in-out',
});

export const CarouselItem = styled('div', {
  flex: 'none',
  width: '100%',
  display: 'flex',
});

export const ElementsStyleds = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'absolute',

  zIndex: 2,
});

export const ContainerIndexCircles = styled('div', {
  display: 'flex',
  gap: 5,
  top: '97%',

  position: 'absolute',

  zIndex: 3,
});
export const IndexCircles = styled('div', {
  height: 8,
  width: 8,

  borderRadius: '50%',

  background: 'red',
});

export const ButtonNextBack = styled('button', {
  height: '50px',
  width: '50px',
});
