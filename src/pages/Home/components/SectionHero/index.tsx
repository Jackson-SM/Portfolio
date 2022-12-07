import React from 'react';

import { TextColor } from '../../../../components/TextColor';
import { ContainerHero, ContainerInfo } from './styles';

export function SectionHero() {
  return (
    <ContainerHero>
      <ContainerInfo>
        <TextColor size="small">Jackson Magalhães</TextColor>
      </ContainerInfo>
    </ContainerHero>
  );
}
