import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import React, { useCallback, useEffect, useState, useRef } from 'react';

import { CardProject } from '../../pages/Home/components/SectionProjects/CardProject';
import {
  ButtonNextBack,
  CarouselContainer,
  CarouselItem,
  CarouselItems,
  CarouselWrapper,
  ElementsStyleds,
} from './styles';

export type stacksTypeCarousel = {
  name: string;
  color: string;
  icon?: JSX.Element;
};

export type itemsCarousel = {
  title?: string;
  cover: string;
  samples?: string[];
  stacks?: stacksTypeCarousel[];
};

type CarouselProps = React.ComponentProps<typeof CarouselContainer> & {
  items: itemsCarousel[];
  scrolled?: boolean;
};
export function Carousel({ children, items, scrolled }: CarouselProps) {
  const carouselItemsRef = useRef<HTMLDivElement>(null);

  return (
    <CarouselContainer className="carousel">
      <ElementsStyleds>
        <ButtonNextBack
          onClick={(event) => {
            carouselItemsRef.current?.scrollBy(carouselItemsRef.current.clientWidth * -1 + 45, 0);
          }}
        >
          <ArrowLeftIcon />
        </ButtonNextBack>
        <ButtonNextBack
          onClick={(event) => {
            carouselItemsRef.current?.scrollBy(carouselItemsRef.current.clientWidth + 45, 0);
          }}
        >
          <ArrowRightIcon />
        </ButtonNextBack>
      </ElementsStyleds>
      <CarouselWrapper ref={carouselItemsRef}>
        <CarouselItems>
          {items.map((item, index) => {
            return (
              <CarouselItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <CardProject item={item} />
              </CarouselItem>
            );
          })}
        </CarouselItems>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
