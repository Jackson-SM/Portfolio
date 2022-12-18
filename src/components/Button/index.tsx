import React from 'react';

import { StyledButton } from './styles';

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  as?: React.ElementType;
  href?: string;
};

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
