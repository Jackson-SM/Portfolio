import { styled } from '../../config/stitches.config';

export const CarouselContainer = styled('div', {
  position: 'relative',
  borderRadius: '10px',

  maxWidth: '740px',

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

  borderRadius: 5,
  overflow: 'hidden',
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
export const IndexCircles = styled('div', {
  height: 8,
  width: 8,

  transition: 'all ease 200ms',

  borderRadius: '50%',

  background: '$textDark2',

  cursor: 'pointer',

  variants: {
    current: {
      true: {
        borderRadius: 10,
        width: 25,
        background: 'white',
      },
    },
  },
});

export const ButtonNextBack = styled('button', {
  height: '50px',
  width: '50px',

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
