import React from 'react';
import { SiHtml5 } from 'react-icons/si';

import {
  ContentSkillCard,
  DescriptionCard,
  IconContainer,
  ProgressBar,
  StyledIcon,
  StyledSkillsCard,
  TitleSkillCard,
} from './styles';

interface IPropsCardSkill extends React.ComponentProps<typeof StyledSkillsCard> {
  title: string;
  icon: JSX.Element;
  description: string;
  color: string;
  knowledgeAmount: number;
}

export function CardSkill({ title, icon, description, color, knowledgeAmount }: IPropsCardSkill) {
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
        <ProgressBar css={{ '&::before': { background: `${color}` } }} />
      </ContentSkillCard>
    </StyledSkillsCard>
  );
}
