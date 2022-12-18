import React from 'react';

import { BoxContainer } from './styles';

type BoxProps = React.ComponentProps<typeof BoxContainer>;

export function Box({ children, ...props }: BoxProps) {
  return <BoxContainer {...props}>{children}</BoxContainer>;
}
