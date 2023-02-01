import { styled } from '../../../../../config/stitches.config';

export const StyledCardProject = styled('div', {
  width: 450,
  height: 350,
  borderRadius: 5,
  padding: 5,

  position: 'relative',

  background: '$backgroundTransparenc3',

  display: 'flex',
  flexDirection: 'column',

  margin: '0 auto',

  '@large': {
    width: '80%',
  },
});
export const CoverProject = styled('div', {
  width: '100%',
  height: '100%',

  position: 'relative',

  borderRadius: 5,
  overflow: 'hidden',

  zIndex: '1',

  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});

export const WrapperProject = styled('div', {
  overflow: 'hidden',
  display: 'flex',

  position: 'relative',

  width: '100%',
  height: '100%',

  scrollBehavior: 'smooth',
});

export const WrapperItems = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',

  width: '100%',

  transition: 'all ease 300ms',

  borderRadius: 5,

  scrollBehavior: 'smooth',

  pointerEvents: 'auto',
});

export const ItemWrapper = styled('div', {
  width: '100%',
  height: '100%',
  flex: 'none',
});

export const ImagesCoverIndex = styled('div', {
  position: 'absolute',

  top: '90%',
  left: 0,

  width: '100%',
  height: '100%',

  gap: 5,

  display: 'flex',
  justifyContent: 'center',
});

export const IndexCircles = styled('div', {
  borderRadius: '50%',

  display: 'flex',
  width: 10,
  height: 10,

  background: '$textDark',

  transition: 'all ease 130ms',

  cursor: 'pointer',

  variants: {
    current: {
      true: {
        width: 20,
        borderRadius: '5px',
        background: 'white',
      },
    },
  },
});

// Content Component
export const ContentProject = styled('div', {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const TopContentProject = styled('div', {});
export const TitleProject = styled('div', {});

export const BodyContentProject = styled('div', {});
export const StackUseds = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 15,
});

export const Description = styled('p', {
  padding: 0,
  margin: 0,
  maxWidth: '100%',
});
export const StackUsedSpan = styled('span', {
  fontSize: '$2',
  cursor: 'default',

  display: 'flex',
  alignItems: 'center',
  gap: 5,

  borderRadius: '50%',

  padding: 10,

  '& svg': {
    width: 18,
    height: 18,
  },
});
export const MoreMedias = styled('button', {
  position: 'absolute',

  outline: 'none',
  border: 'none',
  background: '$backgroundLight',

  cursor: 'pointer',

  borderRadius: '50%',
  padding: 10,

  display: 'flex',

  marginTop: '-30px',
  '& svg': {
    width: 25,
    height: 25,
    color: '$text',
  },

  '&:hover .tolltip': {
    opacity: 1,
    transform: 'translateX(20px)',
  },
});

export const TolltipContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
});
export const TollTip = styled('div', {
  position: 'absolute',
  padding: 10,

  opacity: '0',
  transition: 'all ease 200ms',
  transform: 'translateX(0)',
  transitionDelay: '0.5s',

  top: '0',
  left: '100%',

  background: 'white',

  borderRadius: '5px',

  pointerEvents: 'none',
});
export const TextTolltip = styled('span', {
  fontSize: '$3',
});
export const ArrowTolltip = styled('div', {
  position: 'absolute',
  left: '-7px',
  top: 0,
  width: 0,
  height: 0,
  margin: '10px auto',
  borderBottom: '10px solid transparent',
  borderTop: '10px solid transparent',
  borderRight: '7px solid #fffe',
});
