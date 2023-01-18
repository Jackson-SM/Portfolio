import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import React, { useCallback, useEffect, useState } from 'react';

import {
  ButtonNextBack,
  CarouselContainer,
  CarouselItem,
  CarouselItems,
  CarouselWrapper,
  ContainerIndexCircles,
  ElementsStyleds,
  IndexCircles,
} from './styles';

export type itemsCarousel = {
  title?: string;
  cover: string;
  samples?: string[];
};

type CarouselProps = React.ComponentProps<typeof CarouselContainer> & {
  itemsPerScroll?: number;
  items: itemsCarousel[];
};
export function Carousel({ children, itemsPerScroll, items }: CarouselProps) {
  const [positionItem, setPositionItem] = useState(0);

  const backPositionItem = () => {
    setPositionItem((position) => (position <= 0 ? items.length - 1 : position - 1));
  };

  const nextPositionItem = useCallback(() => {
    setPositionItem((position) => (position >= items.length / (itemsPerScroll ?? 1) - 1 ? 0 : position + 1));
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
            const indexPerScroll = items.length / (itemsPerScroll ?? 1);
            const condition = index <= indexPerScroll;
            return condition && <IndexCircles key={index} current={index === positionItem} />;
          })}
        </ContainerIndexCircles>
      </ElementsStyleds>
      <CarouselWrapper>
        <CarouselItems css={{ transform: `translateX(-${positionItem * 100}%)` }}>
          {items.map((item, index) => {
            return (
              <CarouselItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                css={{
                  width: `${100 / (itemsPerScroll ?? 1)}%`,
                  '& img': {
                    width: `100%`,
                  },
                }}
              >
                <img src={item.cover} alt="" />
              </CarouselItem>
            );
          })}
        </CarouselItems>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
