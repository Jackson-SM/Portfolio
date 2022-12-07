import { styled } from '../../config/stitches.config';

export const StyledTextColor = styled('h1', {
  '& strong': {
    color: '$primary',
  },

  defaultVariants: {
    size: 'medium',
  },

  variants: {
    size: {
      small: {
        fontSize: '$3',
      },
      medium: {
        fontSize: '$4',
      },
      large: {
        fontSize: '$5',
      },
    },
  },
});
