import React, { useCallback, useEffect, useState } from 'react';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

import imgs from '../../../../assets/photo_2.jpg';
import { Carousel } from '../../../../components/Carousel';
import { CarouselItem } from '../../../../components/Carousel/styles';
import { TitleSection } from '../TitleSection';
import { CardSkill } from './CardSkill';
import { ContainerSectionTwo, ContentSectionTwo, ContentSkillsSection, TopContainerSectionTwo } from './styles';

function SectionSkillsTwo() {
  const [positionItem, setPositionItem] = useState<number>(0);

  const itemsCarousel = [
    { element: <img src={imgs} alt="" /> },
    { element: <img src={imgs} alt="" /> },
    { element: <img src={imgs} alt="" /> },
  ];

  const backPositionItem = () => {
    setPositionItem((position) => (position <= 0 ? itemsCarousel.length - 1 : position - 1));
  };
  const nextPositionItem = useCallback(() => {
    setPositionItem((position) => (position >= itemsCarousel.length - 1 ? 0 : position + 1));
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

  console.log(positionItem);

  return (
    <ContainerSectionTwo>
      <button onClick={backPositionItem}>Back Item</button>
      <button onClick={nextPositionItem}>Next Item</button>
      <TopContainerSectionTwo>
        <TitleSection color="primary">My Skills</TitleSection>
        <TitleSection size="md">My Experiences</TitleSection>
      </TopContainerSectionTwo>
      <ContentSectionTwo>
        <ContentSkillsSection>
          <CardSkill
            title="Hyper Text Markup Language(HTML)"
            icon={<SiHtml5 />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#fc6a26"
            knowledgeAmount={62}
          />
          <CardSkill
            title="Cascading Style Sheets(CSS)"
            icon={<SiCss3 />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#2695fc"
            knowledgeAmount={45}
          />
          <CardSkill
            title="Hyper Text Markup Language(HTML)"
            icon={<SiJavascript />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#fce726"
            knowledgeAmount={24}
          />
        </ContentSkillsSection>
        <Carousel positionItems={positionItem} onClick={backPositionItem}>
          {itemsCarousel.map((item, key) => {
            return (
              <CarouselItem
                // eslint-disable-next-line react/no-array-index-key
                key={key}
                css={{
                  '& img': {
                    width: '100%',
                    height: '100%',
                  },
                }}
              >
                {item.element}
              </CarouselItem>
            );
          })}
        </Carousel>
      </ContentSectionTwo>
    </ContainerSectionTwo>
  );
}

export default SectionSkillsTwo;
