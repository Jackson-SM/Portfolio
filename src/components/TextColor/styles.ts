import { styled } from '../../config/stitches.config';

const TextColorCss = {
  '& strong': {
    color: '$primary',
  },

  defaultVariants: {
    size: 'medium',
  },

  variants: {
    size: {
      small_low: {
        fontSize: '$2',
      },
      small: {
        fontSize: '$3',
      },
      medium: {
        fontSize: '$4',
      },
      large: {
        fontSize: '$5',
      },
      large_xx: {
        fontSize: '$6',
      },
    },
  },
};

export const StyledTextColor = styled('h1', TextColorCss);
