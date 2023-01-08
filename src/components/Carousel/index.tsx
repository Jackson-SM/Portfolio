import React from 'react';

import { CarouselContainer, CarouselItems, CarouselWrapper } from './styles';

type CarouselProps = React.ComponentProps<typeof CarouselContainer> & {
  positionItems: number;
  itemsPerScroll?: number;
};
export function Carousel({ children, positionItems, itemsPerScroll }: CarouselProps) {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselItems css={{ transform: `translateX(-${positionItems * 100}%)` }}>{children}</CarouselItems>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
