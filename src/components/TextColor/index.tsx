import React from 'react';

import { StyledTextColor } from './styles';

type PropsTextColor = React.ComponentProps<typeof StyledTextColor> & {
  as?: React.ElementType;
};
export function TextColor({ children, ...props }: PropsTextColor) {
  return (
    <StyledTextColor {...props} className="textcolor">
      {children}
    </StyledTextColor>
  );
}
