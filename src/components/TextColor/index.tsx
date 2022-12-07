import React from 'react';

import { StyledTextColor } from './styles';

type PropsTextColor = {
  children: React.ReactNode;
};

export function TextColor({ children }: PropsTextColor) {
  return <StyledTextColor>{children}</StyledTextColor>;
}
