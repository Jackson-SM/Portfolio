import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { IconCardProject, IconContainerCard, LinkCardProject, StyledCardProject, TitleCardProject } from './styles';

export type stacksTypeCarousel = {
  name: string;
  color: string;
  icon?: JSX.Element;
};

export type itemsProjects = {
  title?: string;
  cover: string;
  samples?: string[];
  stacks?: stacksTypeCarousel[];
  link?: string;
};

export type CardProjectProps = {
  project: itemsProjects;
};

export function CardProject({ project, ...props }: CardProjectProps) {
  return (
    <StyledCardProject>
      <IconContainerCard>
        <IconCardProject />
      </IconContainerCard>
      <TitleCardProject>{project.title}</TitleCardProject>
      <LinkCardProject href={project.link}>
        Ver Mais <AiOutlineArrowRight />
      </LinkCardProject>
    </StyledCardProject>
  );
}
