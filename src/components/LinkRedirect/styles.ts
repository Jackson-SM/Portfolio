import { styled } from '../../config/stitches.config';

export const StyledLinkRedirect = styled('a', {
  textDecoration: 'none',

  '& svg': {
    transition: '$transitionsLow',
  },

  '&:hover svg': {
    color: '$primaryLight',
  },
});
