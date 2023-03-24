import React from 'react';

import { StyledButton } from './styles';

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  as?: React.ElementType;
  target?: string;
  href?: string;
};

export function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton {...props} className="button_cv">
      {children}
    </StyledButton>
  );
}
