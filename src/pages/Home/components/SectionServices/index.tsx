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
      title: 'Habilidades',
      text: 'Conto com diversos conhecimento em tecnologias atuais e mais usadas no mercado como: ReactJS, TailwindCSS e Node.JS. Em constante aprendizado e aprimoramento das minhas habilidades atuais trabalhando com projetos pessoais.',
      icon: <StackIcon />,
    },
    {
      title: 'Experiência',
      text: "Possuo experiência com criação de projetos e aplicações interativas consumindo Api's e criando Landing Pages modernas. Possuo uma grande vontade de aprender e me engajar meus estudos e experiência compartilhando com outros desenvolvedores do mercado.",
      icon: <MagicWandIcon />,
    },
  ];

  return (
    <ContainerSectionAboutMe id="services">
      <TopSections>
        <TitleSection color="primary">Meus Serviços</TitleSection>
      </TopSections>
      <ContainerSkillsIndividualCards>
        {contentSkillIndividual.map((skill) => {
          return <SkillIndividualCard key={skill.title} title={skill.title} text={skill.text} icon={skill.icon} />;
        })}
      </ContainerSkillsIndividualCards>
    </ContainerSectionAboutMe>
  );
}
