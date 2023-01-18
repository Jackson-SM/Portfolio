import { CodeIcon, MagicWandIcon, StackIcon } from '@radix-ui/react-icons';
import React from 'react';
import { BiCodeBlock } from 'react-icons/bi';

import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { SkillIndividualCard } from './SkillIndividualCard';
import { ContainerSectionAboutMe, ContainerSkillsIndividualCards, TopSection } from './styles';

export function SectionServices() {
  const contentSkillIndividual = [
    {
      title: 'Front-End',
      text: 'Construção de aplicações interativas e adaptáveis (responsivas) utilizando das tecnologias atuais do mercado. Acostumado com diversos layouts para melhor experiência do usuário na plataforma.',
      icon: <BiCodeBlock />,
    },
    {
      title: 'Back-End',
      text: 'Iniciar projetos ou dar manutenções utlizando Javascript ou Typescript. Habilidades em Frameworks (AdonisJS, NestJS) e metodologias ágeis, Design Patterns (MVC, Injection Dependency, Inversion Dependency).',
      icon: <CodeIcon />,
    },
    {
      title: 'Stacks',
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon: <StackIcon />,
    },
    {
      title: 'Experiência',
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon: <MagicWandIcon />,
    },
  ];

  return (
    <ContainerSectionAboutMe>
      <TopSections>
        <TitleSection color="primary">About Me</TitleSection>
      </TopSections>
      <ContainerSkillsIndividualCards>
        {contentSkillIndividual.map((skill) => {
          return <SkillIndividualCard key={skill.title} title={skill.title} text={skill.text} icon={skill.icon} />;
        })}
      </ContainerSkillsIndividualCards>
    </ContainerSectionAboutMe>
  );
}
