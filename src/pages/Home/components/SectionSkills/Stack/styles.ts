import { styled } from '../../../../../config/stitches.config';

export const StyledStack = styled('div', {
  padding: 25,
  borderRadius: 15,
  position: 'relative',
  zIndex: '1',

  height: '150px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  cursor: 'default',

  '&::before': {
    content: '',

    position: 'absolute',

    width: '100%',
    height: '2px',

    top: '94%',
    left: 0,

    background: '$background',

    zIndex: '-1',
  },
  '&::after': {
    content: '',

    position: 'absolute',

    width: '100%',
    height: '2px',

    top: 5,
    left: 0,

    background: '$background',

    zIndex: '-1',
  },
});

export const StringStack = styled('span', {
  fontSize: 25,
});

export const StringProjectAmount = styled('span', {
  fontSize: 11,
  justifySelf: 'end',
});

export const StyledIconStack = styled('div', {
  background: '$background',

  padding: 10,
  width: 'max-content',
  borderRadius: '50%',
  marginTop: 'calc(-15px - 30px)',

  display: 'flex',

  zIndex: '1',

  transition: 'all ease 230ms',

  '& svg': {
    width: 30,
    height: 30,
  },
});

export const ContainerStacks = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 250px)',
  padding: 35,
  gap: 10,

  '@large': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
});

export const SuperContainerStacks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const StyledTitleTypeStack = styled('h1', {
  color: '$textDark',
  padding: 10,
  fontFamily: 'Quicksand',
});
