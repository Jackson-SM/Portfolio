import React from 'react';

import dashboard from '../../../../assets/projects-images/dashboard.png';
import desafioHero from '../../../../assets/projects-images/desafio_hero.png';
import formLogin from '../../../../assets/projects-images/form_login.png';
import formRegister from '../../../../assets/projects-images/form_register.png';
import infiniteAbout from '../../../../assets/projects-images/infinite_about.png';
import infiniteCards from '../../../../assets/projects-images/infinite_cards.png';
import infiniteFooter from '../../../../assets/projects-images/infinite_footer.png';
import infiniteHero from '../../../../assets/projects-images/infinite_hero.png';
import megacineDashboard from '../../../../assets/projects-images/megacine_dashboard.png';
import megacineHero from '../../../../assets/projects-images/megacine_hero.png';
import rocketVPSHero from '../../../../assets/projects-images/rocket_vps_hero.png';
import rocketSpaceHero from '../../../../assets/projects-images/rocketspace_hero.png';
import { Carousel, itemsCarousel } from '../../../../components/Carousel';
import { TextColor } from '../../../../components/TextColor';
import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { ContainerSectionProjects, ContentSectionProjects } from './styles';

export function SectionProjects() {
  const projects: itemsCarousel[] = [
    {
      title: 'Infinite',
      cover: infiniteHero,
      samples: [infiniteAbout, infiniteCards, infiniteFooter],
    },
    { title: 'MegaCine', cover: megacineHero },
    { title: 'RocketSpace', cover: rocketSpaceHero },
    { title: 'Rocket VPS', cover: rocketVPSHero },
    { title: 'Dashboard', cover: dashboard },
    { title: 'Desafio', cover: desafioHero },
    { title: 'Form Login', cover: formLogin },
    { title: 'Form Register', cover: formRegister },
  ];

  return (
    <ContainerSectionProjects>
      <TopSections>
        <TitleSection color="primary">Meus Projetos</TitleSection>
      </TopSections>
      <ContentSectionProjects>
        <Carousel items={projects} />
      </ContentSectionProjects>
    </ContainerSectionProjects>
  );
}
