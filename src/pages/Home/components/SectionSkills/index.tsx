import React from 'react';

import { TextColor } from '../../../../components/TextColor';
import { ContainerSectionSkills, TopContainerSkills } from './styles';

export function SectionSkills() {
  const stacks = [
    {
      stack: 'Javascript',
      subStacks: [
        {
          stack: 'JQuery',
        },
        {
          stack: 'Chart.js',
        },
      ],
    },
    {
      stack: 'Typescript',
    },
    {
      stack: 'React JS',
      subsTacks: [
        {
          stack: 'Hooks',
        },
        {
          stack: 'Redux',
        },
        {
          stack: 'Zustang',
        },
        {
          stack: 'React Router Dom',
        },
        {
          stack: 'React Hook Form',
        },
        {
          stack: 'Radix',
        },
        {
          stack: 'Stitches',
        },
        {
          stack: 'Styled Components',
        },
        {
          stack: 'SWR / React Query',
        },
      ],
    },
    {
      stack: 'HTML5',
      subsTacks: [
        {
          stacks: 'Bootstrap',
        },
      ],
    },
    {
      stack: 'CSS3',
    },
    {
      stack: 'Node.JS',
      subsTacks: [
        {
          stack: 'Design Patterns / Repository',
        },
        {
          stack: 'Architecture Patterns / MVC',
        },
        {
          stack: 'Nest JS',
        },
        {
          stack: 'Adonis JS',
        },
        {
          stack: 'Express',
        },
        {
          stack: 'Typeorm',
        },
        {
          stack: 'Sequelize',
        },
        {
          stack: 'JWT Authentication',
        },
        {
          stack: 'Jest Testing / E2E / Integração / Unitário',
        },
      ],
    },
    {
      stack: 'PHP',
    },
  ];
  const subStacks = [];

  return (
    <ContainerSectionSkills>
      <TopContainerSkills>
        <TextColor>
          <strong>Stacks</strong>
        </TextColor>
      </TopContainerSkills>
    </ContainerSectionSkills>
  );
}
