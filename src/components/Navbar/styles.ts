import { styled } from '../../config/stitches.config';
import { LinksNavbar } from './components/LinksNavbar';

LinksNavbar.toString = () => '.links-navbar';

export const ButtonOpenOrClosedNavbar = styled('button', {
  outline: 'none',
  border: 'none',
  background: 'rgba(70, 70, 70, 0.92)',

  display: 'none',
  alignItems: 'center',

  cursor: 'pointer',

  color: '$text',

  padding: 6,
  borderRadius: 3,

  margin: 0,

  '& svg': {
    width: 22,
    height: 22,
  },
});

export const StyledNavbar = styled('nav', {
  height: 60,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  padding: '0 20px 0 20px',

  background: '$backgroundLight',

  '@small': {},

  '@medium': {
    [`& ${LinksNavbar}`]: {
      position: 'fixed',

      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      background: 'rgba(33, 33, 33, 0.92)',
      width: '100%',

      [`& ${ButtonOpenOrClosedNavbar}`]: {
        display: 'flex',
      },
    },
    [`& ${ButtonOpenOrClosedNavbar}`]: {
      display: 'flex',
    },
  },
});
