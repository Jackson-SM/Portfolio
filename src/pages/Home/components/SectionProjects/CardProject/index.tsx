import React from 'react';

import { itemsCarousel } from '../../../../../components/Carousel';
import {
  CoverProject,
  ContentProject,
  StyledCardProject,
  TopContentProject,
  TitleProject,
  BodyContentProject,
  StackUseds,
  StackUsedSpan,
} from './styles';

type PropsCardProject = React.ComponentProps<typeof StyledCardProject> & {
  item: itemsCarousel;
};

export function CardProject({ children, item, ...props }: PropsCardProject) {
  return (
    <StyledCardProject {...props}>
      <CoverProject>
        <img src={item.cover} alt="" />
      </CoverProject>
      <ContentProject>
        <TopContentProject>
          <TitleProject>{item.title}</TitleProject>
        </TopContentProject>
        <BodyContentProject>
          <StackUseds>
            {item.stacks?.map((stack) => {
              return (
                <StackUsedSpan
                  css={{
                    background: `linear-gradient(120deg, ${stack.color}, transparent)`,
                  }}
                  key={Math.random()}
                >
                  {stack.icon}
                  {stack.name}
                </StackUsedSpan>
              );
            })}
          </StackUseds>
        </BodyContentProject>
      </ContentProject>
    </StyledCardProject>
  );
}
