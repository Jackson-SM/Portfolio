import React, { useCallback, useEffect, useState } from 'react';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

import dashboard from '../../../../assets/projects-images/dashboard.png';
import desafioHero from '../../../../assets/projects-images/desafio_hero.png';
import desafioHeroFrontEnd from '../../../../assets/projects-images/desafio-front-end.png';
import formLogin from '../../../../assets/projects-images/form_login.png';
import formRegister from '../../../../assets/projects-images/form_register.png';
import infiniteHero from '../../../../assets/projects-images/infinite_hero.png';
import megacineDashboard from '../../../../assets/projects-images/megacine_dashboard.png';
import megacineHero from '../../../../assets/projects-images/megacine_hero.png';
import rocketVPSHero from '../../../../assets/projects-images/rocket_vps_hero.png';
import rocketSpaceHero from '../../../../assets/projects-images/rocketspace_hero.png';
import { Carousel, itemsCarousel } from '../../../../components/Carousel';
import { CarouselItem } from '../../../../components/Carousel/styles';
import { TitleSection } from '../TitleSection';
import { CardSkill } from './CardSkill';
import { ContainerSectionTwo, ContentSectionTwo, ContentSkillsSection, TopContainerSectionTwo } from './styles';

function SectionSkillsTwo() {
  const [positionItem, setPositionItem] = useState<number>(0);

  const projects: itemsCarousel[] = [
    {
      title: 'Infinite',
      cover: infiniteHero,
      samples: [infiniteHero, infiniteHero, infiniteHero],
    },
    { title: 'MegaCine', cover: megacineHero, samples: [infiniteHero, infiniteHero, infiniteHero] },
    { title: 'RocketSpace', cover: rocketSpaceHero, samples: [infiniteHero, infiniteHero, infiniteHero] },
    { title: 'Rocket VPS', cover: rocketVPSHero, samples: [infiniteHero, infiniteHero, infiniteHero] },
    { title: 'Dashboard', cover: dashboard, samples: [infiniteHero, infiniteHero, infiniteHero] },
    { title: 'Desafio', cover: desafioHero, samples: [infiniteHero, infiniteHero, infiniteHero] },
    { title: 'Form Login', cover: formLogin, samples: [infiniteHero, infiniteHero, infiniteHero] },
    { title: 'Form Register', cover: formRegister, samples: [infiniteHero, infiniteHero, infiniteHero] },
    { title: 'Megacine Dashboard', cover: megacineDashboard, samples: [infiniteHero, infiniteHero, infiniteHero] },
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
        <Carousel items={projects} />
      </ContentSectionTwo>
    </ContainerSectionTwo>
  );
}

export default SectionSkillsTwo;
