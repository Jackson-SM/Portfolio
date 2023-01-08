import { styled } from '../../config/stitches.config';

export const CarouselContainer = styled('div', {
  position: 'relative',
  borderRadius: '10px',

  maxWidth: '740px',
  overflow: 'hidden',
});
export const CarouselWrapper = styled('div', {
  overflowX: 'hidden',
});
export const CarouselItems = styled('div', {
  display: 'flex',

  transition: 'transform 700ms ease-in-out',
});

export const CarouselItem = styled('div', {
  flex: 'none',
  width: '100%',
  display: 'flex',
});
