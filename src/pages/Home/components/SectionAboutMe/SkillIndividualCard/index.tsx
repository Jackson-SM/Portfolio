import { CodeIcon } from '@radix-ui/react-icons';
import React from 'react';

import {
  ContainerContentSkill,
  ContainerIcon,
  StyledSkillIndividualCard,
  TextSkillIndividual,
  TitleSkillIndividual,
} from './styles';

type SkillIndividualProps = React.ComponentProps<typeof StyledSkillIndividualCard> & {
  title: string;
  text: string;
  icon: JSX.Element;
};

export function SkillIndividualCard({ title, text, icon, ...props }: SkillIndividualProps) {
  return (
    <StyledSkillIndividualCard>
      <ContainerIcon>{icon}</ContainerIcon>
      <ContainerContentSkill>
        <TitleSkillIndividual>{title}</TitleSkillIndividual>
        <TextSkillIndividual>{text}</TextSkillIndividual>
      </ContainerContentSkill>
    </StyledSkillIndividualCard>
  );
}
