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

import { Carousel, itemsCarousel } from '../../../../components/Carousel';
import { CarouselItem } from '../../../../components/Carousel/styles';
import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { CardSkill } from './CardSkill';
import {
  ContainerSectionTwo,
  ContentSectionTwo,
  ContentSkillsBody,
  ContentSkillsSection,
  ContentSkillsTop,
  ContentSkillTitle,
} from './styles';

function SectionSkillsTwo() {
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
      <TopSections>
        <TitleSection color="primary">Minhas Habilidades</TitleSection>
      </TopSections>
      <ContentSectionTwo>
        <ContentSkillsSection>
          <ContentSkillsTop>
            <ContentSkillTitle>Front-end</ContentSkillTitle>
            <CodeIcon />
          </ContentSkillsTop>
          <ContentSkillsBody>
            {stacksFront.map((stack) => {
              return (
                <CardSkill
                  key={stack.color}
                  title={stack.title}
                  color={stack.color}
                  icon={stack.icon}
                  description={stack.description}
                />
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
                <CardSkill
                  key={stack.color}
                  title={stack.title}
                  color={stack.color}
                  icon={stack.icon}
                  description={stack.description}
                />
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
                <CardSkill
                  key={stack.color}
                  title={stack.title}
                  color={stack.color}
                  icon={stack.icon}
                  description={stack.description}
                />
              );
            })}
          </ContentSkillsBody>
        </ContentSkillsSection>
      </ContentSectionTwo>
    </ContainerSectionTwo>
  );
}

export default SectionSkillsTwo;
