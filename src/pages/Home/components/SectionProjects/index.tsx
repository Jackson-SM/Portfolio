import React from 'react';

import { TextColor } from '../../../../components/TextColor';
import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { CardProject } from './CardProject';
import { projects } from './stacks';
import { ContainerSectionProjects, ContentSectionProjects } from './styles';

export function SectionProjects() {
  return (
    <ContainerSectionProjects id="projects">
      <TopSections>
        <TitleSection color="primary">Meus Projetos</TitleSection>
      </TopSections>
      <ContentSectionProjects>
        {projects.map((project) => {
          return <CardProject project={project} key={project.title} />;
        })}
      </ContentSectionProjects>
    </ContainerSectionProjects>
  );
}
