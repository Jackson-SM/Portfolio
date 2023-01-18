import React from 'react';
import { SiHtml5 } from 'react-icons/si';

import {
  ContentSkillCard,
  DescriptionCard,
  IconContainer,
  StyledIcon,
  StyledSkillsCard,
  TitleSkillCard,
} from './styles';

interface IPropsCardSkill extends React.ComponentProps<typeof StyledSkillsCard> {
  title: string;
  icon: JSX.Element;
  description: string;
  color: string;
}

export function CardSkill({ title, icon, description, color }: IPropsCardSkill) {
  return (
    <StyledSkillsCard>
      <IconContainer>
        <StyledIcon
          css={{
            '& svg': {
              color: `${color}`,
            },
          }}
        >
          {icon}
        </StyledIcon>
      </IconContainer>
      <ContentSkillCard>
        <TitleSkillCard>{title}</TitleSkillCard>
        <DescriptionCard>{description}</DescriptionCard>
      </ContentSkillCard>
    </StyledSkillsCard>
  );
}
