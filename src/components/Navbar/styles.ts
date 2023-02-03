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

export const StyledLogoImage = styled('img', {
  width: 40,
  height: 40,
});

export const StyledNavbar = styled('nav', {
  height: 60,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  zIndex: '9999999999999',

  padding: '0 20px 0 20px',

  background: '$backgroundLight',

  position: 'relative',

  '@medium': {
    [`& ${LinksNavbar}`]: {
      position: 'absolute',

      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',

      background: '$background',
      width: '100%',

      top: 0,

      [`& ${ButtonOpenOrClosedNavbar}`]: {
        display: 'flex',
      },
    },
    [`& ${ButtonOpenOrClosedNavbar}`]: {
      display: 'flex',
    },
  },
});

export const LogoNavbar = styled('span', {
  fontSize: '24px',

  '& strong': {
    textDecoration: 'underline',

    color: '$primaryLight',
  },
});
