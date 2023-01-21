import React from 'react';
import { SiBootstrap, SiCss3, SiHtml5, SiJava, SiJavascript, SiNodedotjs, SiPhp, SiReact } from 'react-icons/si';

import dashboard from '../../../../assets/projects-images/dashboard.png';
import desafioHero from '../../../../assets/projects-images/desafio_hero.png';
import formLogin from '../../../../assets/projects-images/form_login.png';
import formRegister from '../../../../assets/projects-images/form_register.png';
import formUploadMegacine from '../../../../assets/projects-images/form_step_upload_megacine.png';
import infiniteAbout1 from '../../../../assets/projects-images/infinite_about_1.png';
import infiniteAbout2 from '../../../../assets/projects-images/infinite_about_2.png';
import infiniteAbout3 from '../../../../assets/projects-images/infinite_about_3.png';
import infiniteCards from '../../../../assets/projects-images/infinite_cards.png';
import infiniteFooter from '../../../../assets/projects-images/infinite_footer.png';
import infiniteHero from '../../../../assets/projects-images/infinite_hero.png';
import infinitePurchase from '../../../../assets/projects-images/infinite_purchase.png';
import megacineCard from '../../../../assets/projects-images/megacine_card_3.png';
import megacineDashboard from '../../../../assets/projects-images/megacine_dashboard.png';
import megacineHero from '../../../../assets/projects-images/megacine_hero.png';
import megacineResponsive from '../../../../assets/projects-images/megacine_responsive.png';
import megacineResponsive2 from '../../../../assets/projects-images/megacine_responsive2.png';
import megacineSerie from '../../../../assets/projects-images/page_serie.png';
import rocketVPSHero from '../../../../assets/projects-images/rocket_vps_hero.png';
import rocketSpaceHero from '../../../../assets/projects-images/rocketspace_hero.png';
import { Carousel, itemsCarousel } from '../../../../components/Carousel';
import { TextColor } from '../../../../components/TextColor';
import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { CardProject } from './CardProject';
import { ContainerSectionProjects, ContentSectionProjects } from './styles';

export function SectionProjects() {
  const projects: itemsCarousel[] = [
    {
      title: 'Infinite',
      cover: infiniteHero,
      samples: [
        infiniteAbout1,
        infiniteAbout2,
        infiniteAbout3,
        infiniteCards,
        infinitePurchase,
        infiniteFooter,
        formUploadMegacine,
      ],
      stacks: [
        { name: 'HTML5', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
        { name: 'Javascript', color: '#f1ff2d', icon: <SiJavascript /> },
        { name: 'Node.Js', color: '#34921c', icon: <SiNodedotjs /> },
      ],
    },
    {
      title: 'MegaCine',
      cover: megacineHero,
      samples: [megacineDashboard, megacineResponsive, megacineResponsive2, megacineCard, megacineSerie],
      stacks: [
        { name: 'PHP', color: '#456a96', icon: <SiPhp /> },
        { name: 'HTML', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
        { name: 'Javascript', color: '#f1ff2d', icon: <SiJavascript /> },
      ],
    },
    {
      title: 'RocketSpace',
      cover: rocketSpaceHero,
      stacks: [
        { name: 'HTML5', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
        { name: 'Javascript', color: '#f1ff2d', icon: <SiJavascript /> },
      ],
    },
    {
      title: 'Rocket VPS',
      cover: rocketVPSHero,
      stacks: [
        { name: 'HTML5', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
        { name: 'Javascript', color: '#f1ff2d', icon: <SiJavascript /> },
        { name: 'Bootstrap', color: '#bc2dff', icon: <SiBootstrap /> },
      ],
    },
    {
      title: 'Dashboard',
      cover: dashboard,
      stacks: [
        { name: 'HTML5', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
        { name: 'Javascript', color: '#f1ff2d', icon: <SiJavascript /> },
        { name: 'ReactJS', color: '#10c7ff', icon: <SiReact /> },
      ],
    },
    {
      title: 'Desafio',
      cover: desafioHero,
      stacks: [
        { name: 'HTML5', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
      ],
    },
    {
      title: 'Form Login',
      cover: formLogin,
      stacks: [
        { name: 'HTML5', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
        { name: 'Javascript', color: '#f1ff2d', icon: <SiJavascript /> },
      ],
    },
    {
      title: 'Form Register',
      cover: formRegister,
      stacks: [
        { name: 'HTML5', color: '#ee8422', icon: <SiHtml5 /> },
        { name: 'CSS3', color: '#2da1ff', icon: <SiCss3 /> },
        { name: 'Javascript', color: '#f1ff2d', icon: <SiJavascript /> },
      ],
    },
  ];

  return (
    <ContainerSectionProjects id="projects">
      <TopSections>
        <TitleSection color="primary">Meus Projetos</TitleSection>
      </TopSections>
      <ContentSectionProjects>
        <Carousel items={projects} css={{ width: '100%' }} />
      </ContentSectionProjects>
    </ContainerSectionProjects>
  );
}
