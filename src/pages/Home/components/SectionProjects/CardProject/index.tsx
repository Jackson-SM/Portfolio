import { PlusIcon } from '@radix-ui/react-icons';
import React, { useState, useRef } from 'react';

import { itemsCarousel } from '../../../../../components/Carousel';
import { CarouselItems } from '../../../../../components/Carousel/styles';
import {
  CoverProject,
  ContentProject,
  StyledCardProject,
  TopContentProject,
  TitleProject,
  BodyContentProject,
  StackUseds,
  StackUsedSpan,
  ImagesCoverIndex,
  IndexCircles,
  WrapperProject,
  WrapperItems,
  ItemWrapper,
  Description,
  TolltipContainer,
  TollTip,
  TextTolltip,
  ArrowTolltip,
} from './styles';

type PropsCardProject = React.ComponentProps<typeof StyledCardProject> & {
  item: itemsCarousel;
};

export function CardProject({ children, item, ...props }: PropsCardProject) {
  const [position, setPosition] = useState(0);

  const nextPosition = () => {
    setPosition((position) => (position >= (item.samples?.length ?? 1) + 1 ? 0 : position + 1));
  };
  const backPosition = () => {
    setPosition((position) => (position <= 0 ? item.samples?.length ?? 1 : position - 1));
  };
  const setPositionIndex = (index: number) => {
    setPosition(index);
  };

  const wrapperItems = useRef(null);

  return (
    <StyledCardProject {...props}>
      <CoverProject>
        <WrapperProject>
          <WrapperItems ref={wrapperItems} css={{ transform: `translateX(-${100 * position}%)` }}>
            <ItemWrapper>
              <figure>
                <img src={item.cover} alt="" />
              </figure>
            </ItemWrapper>
            {item.samples?.map((sample, index) => {
              return (
                <ItemWrapper key={index}>
                  <figure>
                    <img src={sample} alt="" key={index} />
                  </figure>
                </ItemWrapper>
              );
            })}
          </WrapperItems>
        </WrapperProject>
        <ImagesCoverIndex>
          <IndexCircles current={position === 0} onClick={() => setPositionIndex(0)} />
          {item.samples?.map((sample, index) => {
            return (
              <IndexCircles key={index} current={position === index + 1} onClick={() => setPositionIndex(index + 1)} />
            );
          })}
        </ImagesCoverIndex>
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
                    background: `${stack.color}`,
                    '& svg': {
                      color: `$backgroundLight`,
                    },
                  }}
                  key={stack.name}
                >
                  {stack.icon}
                </StackUsedSpan>
              );
            })}
          </StackUseds>
        </BodyContentProject>
      </ContentProject>
    </StyledCardProject>
  );
}
