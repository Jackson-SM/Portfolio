import { Link } from 'react-router-dom';

import { styled } from '../../../../config/stitches.config';
import { ButtonOpenOrClosedNavbar } from '../../styles';

export const ContainerLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  height: '100%',

  [`& ${ButtonOpenOrClosedNavbar}`]: {
    display: 'none',
  },

  transition: '$transitionsMedium',

  variants: {
    OpenMinimizedNavbar: {
      false: {
        top: '100%',
      },
      true: {
        top: '0',
      },
    },
  },
});

export const LinkNavbar = styled(Link, {
  textDecoration: 'none',
  fontSize: '$2',
  color: '$text',
  position: 'relative',
  overflow: 'hidden',

  zIndex: '1',

  display: 'flex',
  alignItems: 'center',

  padding: 5,

  height: '100%',

  transition: '$transitionsLow',

  '&::before': {
    content: '',

    position: 'absolute',

    width: '100%',
    height: '100%',

    top: '100%',
    left: '0',

    background: '$primary',

    zIndex: '1',

    transition: '$transitionsLow',
  },

  '&:hover': {
    color: '$primary',

    '&::before': {
      top: '96%',
    },
  },
});
