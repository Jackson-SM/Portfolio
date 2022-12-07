import React from 'react';

import { StyledLinkRedirect } from './styles';

type PropsLinkRedirect = React.ComponentProps<typeof StyledLinkRedirect>;

export function LinkRedirect({ children, ...props }: PropsLinkRedirect) {
  return <StyledLinkRedirect {...props}>{children}</StyledLinkRedirect>;
}
