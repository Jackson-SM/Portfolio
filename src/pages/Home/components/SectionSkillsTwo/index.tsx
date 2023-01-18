import { CodeIcon } from '@radix-ui/react-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { FaDatabase } from 'react-icons/fa';
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

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
import { CarouselItem } from '../../../../components/Carousel/styles';
import { TitleSection } from '../TitleSection';
import { CardSkill } from './CardSkill';
import {
  ContainerSectionTwo,
  ContentSectionTwo,
  ContentSkillsBody,
  ContentSkillsSection,
  ContentSkillsTop,
  ContentSkillTitle,
  TopContainerSectionTwo,
} from './styles';

function SectionSkillsTwo() {
  const [positionItem, setPositionItem] = useState<number>(0);

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

  const stacksFront = [
    {
      title: 'Hyper Text Markup Language (HTML)',
      icon: <SiHtml5 />,
      description: 'Utilizo HTML em 100% dos meus projetos atualmente.',
      color: '#fc6a26',
    },
    {
      title: 'Cascading Style Sheets (CSS)',
      icon: <SiCss3 />,
      description: 'Presente na maioria dos meus projetos atuais e anteriores.',
      color: '#2695fc',
    },
    {
      title: 'Javascript (JS)',
      icon: <SiJavascript />,
      description: 'Detenho um bom conhecimento em Javascript, tendo +4 projetos utilizando essa tecnologica.',
      color: '#fce726',
    },
    {
      title: 'React JS',
      icon: <SiReact />,
      description: 'Desenvolvedor Junior em React.JS, com +4 projetos, incluindo este portfólio.',
      color: '#00e1ff',
    },
    {
      title: 'TailwindCSS',
      icon: <SiTailwindcss />,
      description: 'Em processo de desenvolvimento, possuo uma landing page completa utilizando TailwindCSS',
      color: '#36aee6',
    },
    {
      title: 'Bootstrap',
      icon: <SiBootstrap />,
      description:
        'Ferramenta que utilizo para uma maior agilidade em meus projetos, contendo +2 projetos utilizando bootstrap.',
      color: '#ad34e6',
    },
  ];
  const stacksBack = [
    {
      title: 'Node.JS',
      icon: <SiNodedotjs />,
      description: 'Construções de Api utilizando Node.JS dentre outros frameworks como Nest.JS ou Adonis.JS',
      color: '#2eb903',
    },
    {
      title: 'Typescript',
      icon: <SiTypescript />,
      description:
        'Integrando Typescript ao node em apis robustas com frameworks que permitam a utilização de Typescript.',
      color: '#34aaee',
    },
    {
      title: 'PHP',
      icon: <SiPhp />,
      description:
        'Conhecimento intermediário em PHP, tendo um projeto grande (site de filmes) com opções de upload utilizando MySQL.',
      color: '#3c70b4',
    },
    {
      title: 'Jest Library',
      icon: <SiJest />,
      description:
        'Atalmente utilizo sempre que possível em minhas aplicações, mantendo uma maior eficácia e facilidade em mantuenções.',
      color: '#ad63a7',
    },
  ];
  const stacksDatabases = [
    {
      title: 'MySQL',
      icon: <SiMysql />,
      description: '1 ano utilizando MySQL em projetos pessoais.',
      color: '#eb9871',
    },
    {
      title: 'PostgreSQL',
      icon: <SiPostgresql />,
      description: 'Banco relacional sendo o meu principal mais utilizado em mes projetos, estando em sua maioria.',
      color: '#4f75af',
    },
    {
      title: 'MongoDB',
      icon: <SiMongodb />,
      description: 'Apenas uma api utilizando MongoDB, porém avançando nos estudos de NoSQL.',
      color: '#09610d',
    },
  ];

  return (
    <ContainerSectionTwo>
      <TopContainerSectionTwo>
        <TitleSection color="primary">My Skills</TitleSection>
      </TopContainerSectionTwo>
      <ContentSectionTwo>
        <ContentSkillsSection>
          <ContentSkillsTop>
            <ContentSkillTitle>Front-end</ContentSkillTitle>
            <CodeIcon />
          </ContentSkillsTop>
          <ContentSkillsBody>
            {stacksFront.map((stack) => {
              return (
                <CardSkill title={stack.title} color={stack.color} icon={stack.icon} description={stack.description} />
              );
            })}
          </ContentSkillsBody>
        </ContentSkillsSection>
        <ContentSkillsSection>
          <ContentSkillsTop>
            <ContentSkillTitle>Back-end</ContentSkillTitle>
            <BiCodeCurly />
          </ContentSkillsTop>
          <ContentSkillsBody>
            {stacksBack.map((stack) => {
              return (
                <CardSkill title={stack.title} color={stack.color} icon={stack.icon} description={stack.description} />
              );
            })}
          </ContentSkillsBody>
        </ContentSkillsSection>
        <ContentSkillsSection>
          <ContentSkillsTop>
            <ContentSkillTitle>Databases</ContentSkillTitle>
            <FaDatabase />
          </ContentSkillsTop>
          <ContentSkillsBody>
            {stacksDatabases.map((stack) => {
              return (
                <CardSkill title={stack.title} color={stack.color} icon={stack.icon} description={stack.description} />
              );
            })}
          </ContentSkillsBody>
        </ContentSkillsSection>
      </ContentSectionTwo>
    </ContainerSectionTwo>
  );
}

export default SectionSkillsTwo;
