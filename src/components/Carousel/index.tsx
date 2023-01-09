import React, { useCallback, useEffect, useState } from 'react';

import {
  ButtonNextBack,
  CarouselContainer,
  CarouselItems,
  CarouselWrapper,
  ContainerIndexCircles,
  ElementsStyleds,
  IndexCircles,
} from './styles';

type itemsCarousel = {
  title: string;
  element: JSX.Element;
};

type CarouselProps = React.ComponentProps<typeof CarouselContainer> & {
  itemsPerScroll?: number;
  items: itemsCarousel[];
};
export function Carousel({ children, itemsPerScroll, items }: CarouselProps) {
  const [positionItem, setPositionItem] = useState<number>(0);

  const backPositionItem = () => {
    setPositionItem((position) => (position <= 0 ? items.length - 1 : position - 1));
  };
  const nextPositionItem = useCallback(() => {
    setPositionItem((position) => (position >= items.length - 1 ? 0 : position + 1));
  }, [positionItem]);

  const loopInMiliseconds = 6000; // 6 Seconds

  useEffect(() => {
    const position = setTimeout(async () => {
      nextPositionItem();
    }, loopInMiliseconds);
    return () => {
      clearInterval(position);
    };
  }, [positionItem]);

  return (
    <CarouselContainer>
      <ElementsStyleds>
        <ButtonNextBack onClick={nextPositionItem}>Next</ButtonNextBack>
        <ButtonNextBack onClick={backPositionItem}>Back</ButtonNextBack>
        <ContainerIndexCircles>
          <IndexCircles />
          <IndexCircles />
          <IndexCircles />
          <IndexCircles />
        </ContainerIndexCircles>
      </ElementsStyleds>
      <CarouselWrapper>
        <CarouselItems css={{ transform: `translateX(-${positionItem * 100}%)` }}>{children}</CarouselItems>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
