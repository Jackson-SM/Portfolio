import { styled } from '../../config/stitches.config';
import { LinksNavbar } from './components/LinksNavbar';

LinksNavbar.toString = () => '.links-navbar';

export const StyledNavbar = styled('nav', {
  height: 60,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  padding: '0 20px 0 20px',

  background: '$backgroundLight',

  '@small': {
    [`& ${LinksNavbar}`]: {
      background: 'red',
    },
  },
});
