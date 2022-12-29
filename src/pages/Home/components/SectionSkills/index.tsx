import React, { useState } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiCsharp,
} from 'react-icons/si';

import { TextColor } from '../../../../components/TextColor';
import { SelectStackType } from './SelectStackType';
import { Stack } from './Stack';
import { ContainerStacks, StyledTitleTypeStack, SuperContainerStacks } from './Stack/styles';
import { ContainerSectionSkills, TopContainerSkills } from './styles';

interface ISubStacksProps {
  stack: string;
}

interface IStacksProps {
  stack: string;
  color?: string;
  stackType: string;
  icon?: JSX.Element;
  subStacks?: ISubStacksProps[];
}

export type stackTypes = 'frontend' | 'backend' | 'database' | 'all';

const stacks: IStacksProps[] = [
  {
    stack: 'Javascript',
    color: '#ffd82b',
    stackType: 'frontend',
    icon: <SiJavascript />,
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
    color: '#2bbcff',
    stackType: 'frontend',
    icon: <SiTypescript />,
  },
  {
    stack: 'React JS',
    color: '#0f7fff',
    stackType: 'frontend',
    icon: <SiReact />,
    subStacks: [
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
    color: '#ff8800',
    icon: <SiHtml5 />,
    stackType: 'frontend',
    subStacks: [
      {
        stack: 'Bootstrap',
      },
    ],
  },
  {
    stack: 'CSS3',
    color: '#2ba0ff',
    stackType: 'frontend',
    icon: <SiCss3 />,
  },
  {
    stack: 'Node.JS',
    color: '#319724',
    stackType: 'backend',
    icon: <SiNodedotjs />,
    subStacks: [
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
    stackType: 'backend',
    color: '#6b8adf',
    icon: <SiPhp />,
  },
  {
    stack: 'CSharp',
    stackType: 'backend',
    color: '#8838b6',
    icon: <SiCsharp />,
  },
  {
    stack: 'PostgreSQL',
    stackType: 'database',
    color: '#6b8adf',
    icon: <SiPostgresql />,
  },
  {
    stack: 'MySQL',
    stackType: 'database',
    color: '#d19b5c',
    icon: <SiMysql />,
  },
  {
    stack: 'MongoDB',
    stackType: 'database',
    color: '#4a9732',
    icon: <SiMongodb />,
  },
];

const frontendFilter = stacks.filter((stack) => stack.stackType === 'frontend');
const backendFilter = stacks.filter((stack) => stack.stackType === 'backend');
const databaseFilter = stacks.filter((stack) => stack.stackType === 'database');

export function SectionSkills() {
  const [stackType, setStackType] = useState<stackTypes>('all');

  const changeValueStackType = (stack: stackTypes) => {
    setStackType(stack);
    console.log(stack);
  };

  return (
    <ContainerSectionSkills>
      <TopContainerSkills>
        <TextColor>
          <strong>Stacks</strong>
        </TextColor>
        <SelectStackType changeValueStackType={changeValueStackType} />
      </TopContainerSkills>
      <SuperContainerStacks>
        {stackType === 'all' && (
          <>
            <StyledTitleTypeStack>Frontend</StyledTitleTypeStack>
            <ContainerStacks>
              {frontendFilter.map((stack) => {
                return <Stack key={stack.stack} stack={stack.stack} color={stack.color} icon={stack.icon} />;
              })}
            </ContainerStacks>
            <StyledTitleTypeStack>Backend</StyledTitleTypeStack>
            <ContainerStacks>
              {backendFilter.map((stack) => {
                return <Stack key={stack.stack} stack={stack.stack} color={stack.color} icon={stack.icon} />;
              })}
            </ContainerStacks>
            <StyledTitleTypeStack>Databases</StyledTitleTypeStack>
            <ContainerStacks>
              {databaseFilter.map((stack) => {
                return <Stack key={stack.stack} stack={stack.stack} color={stack.color} icon={stack.icon} />;
              })}
            </ContainerStacks>
          </>
        )}
        <ContainerStacks>
          {stacks.map((stack) => {
            return (
              stack.stackType === stackType && (
                <Stack key={stack.stack} stack={stack.stack} color={stack.color} icon={stack.icon} />
              )
            );
          })}
        </ContainerStacks>
      </SuperContainerStacks>
    </ContainerSectionSkills>
  );
}
