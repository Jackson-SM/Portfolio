import React from 'react';

import {
  ContentSkillCard,
  DescriptionCard,
  IconContainer,
  StyledIcon,
  StyledSkillsCard,
  TitleSkillCard,
} from './styles';

interface IPropsStack {
  title: string;
  icon: JSX.Element;
  description: string;
  color: string;
}

interface ICardSkillProps extends React.ComponentProps<typeof StyledSkillsCard> {
  stack: IPropsStack;
  lastChild: boolean;
}

export function CardSkill({ stack, lastChild, ...props }: ICardSkillProps) {
  return (
    <StyledSkillsCard {...props}>
      <IconContainer>
        <StyledIcon
          css={{
            '& svg': {
              color: `${stack.color}`,
            },
          }}
        >
          {stack.icon}
        </StyledIcon>
      </IconContainer>
      <ContentSkillCard>
        <TitleSkillCard>{stack.title}</TitleSkillCard>
        <DescriptionCard>{stack.description}</DescriptionCard>
      </ContentSkillCard>
    </StyledSkillsCard>
  );
}
