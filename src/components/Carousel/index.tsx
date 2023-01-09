import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
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
  const changePositionItem = useCallback(
    (index: number) => {
      setPositionItem(index);
    },
    [positionItem],
  );

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
        <ButtonNextBack onClick={backPositionItem}>
          <ArrowLeftIcon />
        </ButtonNextBack>
        <ButtonNextBack onClick={nextPositionItem}>
          <ArrowRightIcon />
        </ButtonNextBack>
        <ContainerIndexCircles>
          {items.map((item, index) => {
            return (
              <IndexCircles key={index} current={index === positionItem} onClick={() => changePositionItem(index)} />
            );
          })}
        </ContainerIndexCircles>
      </ElementsStyleds>
      <CarouselWrapper>
        <CarouselItems css={{ transform: `translateX(-${positionItem * 100}%)` }}>{children}</CarouselItems>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
