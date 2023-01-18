import React from 'react';

import { ContainerTopSections } from './styles';

type PropsTopSections = React.ComponentProps<typeof ContainerTopSections>;

export function TopSections({ children, ...props }: PropsTopSections) {
  return <ContainerTopSections {...props}>{children}</ContainerTopSections>;
}
