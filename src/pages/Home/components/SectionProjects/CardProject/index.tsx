import React from 'react';

import { IconContainerCard, StyledCardProject, StyledIcons, TitleCardProject } from './styles';

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

export type CardProjectProps = React.ComponentProps<typeof StyledCardProject> & {
  project: itemsProjects;
};

export function CardProject({ project, ...props }: CardProjectProps) {
  return (
    <StyledCardProject
      href={project.link}
      target="_blank"
      {...props}
      css={{
        '&:hover .icon-card': {
          opacity: 1,
          transform: 'translateX(0)',
        },
      }}
    >
      <IconContainerCard className="icon-container-card">
        {project.stacks?.map((stack, index) => {
          return (
            <StyledIcons
              css={{
                '& svg': {
                  color: `${stack.color}`,
                },
                transitionDuration: `${(index + 1) / 8}s`,
                transitionDelay: `${(index + 1) / 8}s`,
              }}
              className="icon-card"
            >
              {stack.icon}
            </StyledIcons>
          );
        })}
      </IconContainerCard>
      <TitleCardProject>{project.title}</TitleCardProject>
    </StyledCardProject>
  );
}
