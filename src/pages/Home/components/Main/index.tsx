import React from 'react';

import { ContainerMain } from './styles';

type PropsMain = {
  children: React.ReactNode;
};

export function Main({ children }: PropsMain) {
  return <ContainerMain>{children}</ContainerMain>;
}
