import React from 'react';

import { StyledTextColor, StyledTextColorSpan } from './styles';

type PropsTextColor = React.ComponentProps<typeof StyledTextColor>;
export function TextColor({ children, ...props }: PropsTextColor) {
  return <StyledTextColor {...props}>{children}</StyledTextColor>;
}

export function TextColorSpan({ children, ...props }: PropsTextColor) {
  return <StyledTextColorSpan {...props}>{children}</StyledTextColorSpan>;
}
