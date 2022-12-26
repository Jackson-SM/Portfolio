import {
  DesktopIcon,
  MagicWandIcon,
  RocketIcon,
  StackIcon,
} from '@radix-ui/react-icons';
import React from 'react';

import { TextColor } from '../../../../components/TextColor';
import { SkillIndividualCard } from './SkillIndividualCard';
import {
  ContainerSectionAboutMe,
  ContainerSkillsIndividualCards,
  TopSection,
} from './styles';

export function SectionAboutMe() {
  const contentSkillIndividual = [
    {
      title: 'Responsividade',
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon: <DesktopIcon />,
    },
    {
      title: 'Produtividade',
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon: <RocketIcon />,
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
      <TopSection>
        <TextColor>
          <strong>About Me</strong>
        </TextColor>
      </TopSection>
      <ContainerSkillsIndividualCards>
        {contentSkillIndividual.map((skill) => {
          return (
            <SkillIndividualCard
              key={skill.title}
              title={skill.title}
              text={skill.text}
              icon={skill.icon}
            />
          );
        })}
      </ContainerSkillsIndividualCards>
    </ContainerSectionAboutMe>
  );
}
