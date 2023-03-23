import React from 'react';

import { Carousel, itemsCarousel } from '../../../../components/Carousel';
import { TextColor } from '../../../../components/TextColor';
import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { projects } from './stacks';
import { ContainerSectionProjects, ContentSectionProjects } from './styles';

export function SectionProjects() {
  return (
    <ContainerSectionProjects id="projects">
      <TopSections>
        <TitleSection color="primary">Meus Projetos</TitleSection>
      </TopSections>
      <ContentSectionProjects>
        <h1>Manutenção</h1>
      </ContentSectionProjects>
    </ContainerSectionProjects>
  );
}
