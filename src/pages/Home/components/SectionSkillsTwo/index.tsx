import React, { useCallback, useEffect, useState } from 'react';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

import dashboard from '../../../../assets/projects-images/dashboard.png';
import desafioHero from '../../../../assets/projects-images/desafio_hero.png';
import formLogin from '../../../../assets/projects-images/form_login.png';
import formRegister from '../../../../assets/projects-images/form_register.png';
import infiniteHero from '../../../../assets/projects-images/infinite_hero.png';
import megacineDashboard from '../../../../assets/projects-images/megacine_dashboard.png';
import megacineHero from '../../../../assets/projects-images/megacine_hero.png';
import rocketVPSHero from '../../../../assets/projects-images/rocket_vps_hero.png';
import rocketSpaceHero from '../../../../assets/projects-images/rocketspace_hero.png';
import { Carousel } from '../../../../components/Carousel';
import { CarouselItem } from '../../../../components/Carousel/styles';
import { TitleSection } from '../TitleSection';
import { CardSkill } from './CardSkill';
import { ContainerSectionTwo, ContentSectionTwo, ContentSkillsSection, TopContainerSectionTwo } from './styles';

function SectionSkillsTwo() {
  const [positionItem, setPositionItem] = useState<number>(0);

  const projects = [
    { title: 'Infinite', element: <img src={infiniteHero} alt="" /> },
    { title: 'MegaCine', element: <img src={megacineHero} alt="" /> },
    { title: 'RocketSpace', element: <img src={rocketSpaceHero} alt="" /> },
    { title: 'Rocket VPS', element: <img src={rocketVPSHero} alt="" /> },
    { title: 'Dashboard', element: <img src={dashboard} alt="" /> },
    { title: 'Desafio', element: <img src={desafioHero} alt="" /> },
    { title: 'Form Login', element: <img src={formLogin} alt="" /> },
    { title: 'Form Register', element: <img src={formRegister} alt="" /> },
    { title: 'Megacine Dashboard', element: <img src={megacineDashboard} alt="" /> },
  ];

  return (
    <ContainerSectionTwo>
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
            knowledgeAmount={100}
          />
          <CardSkill
            title="Cascading Style Sheets(CSS)"
            icon={<SiCss3 />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#2695fc"
            knowledgeAmount={75}
          />
          <CardSkill
            title="Hyper Text Markup Language(HTML)"
            icon={<SiJavascript />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#fce726"
            knowledgeAmount={74}
          />
        </ContentSkillsSection>
        <Carousel items={projects}>
          {projects.map((item, key) => {
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
