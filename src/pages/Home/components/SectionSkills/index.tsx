import React from 'react';
import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiPhp } from 'react-icons/si';

import { TextColor } from '../../../../components/TextColor';
import { SelectStackType } from './SelectStackType';
import { Stack } from './Stack';
import { ContainerStacks } from './Stack/styles';
import { ContainerSectionSkills, TopContainerSkills } from './styles';

interface ISubStacksProps {
  stack: string;
}

interface IStacksProps {
  stack: string;
  color?: string;
  icon?: JSX.Element;
  subStacks?: ISubStacksProps[];
}

export function SectionSkills() {
  const stacks: IStacksProps[] = [
    {
      stack: 'Javascript',
      color: '#ffd82b',
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
      icon: <SiTypescript />,
    },
    {
      stack: 'React JS',
      color: '#2b8eff',
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
      subStacks: [
        {
          stack: 'Bootstrap',
        },
      ],
    },
    {
      stack: 'CSS3',
      color: '#2bb1ff',
      icon: <SiCss3 />,
    },
    {
      stack: 'Node.JS',
      color: '#319724',
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
      color: '#6b8adf',
      icon: <SiPhp />,
    },
  ];

  return (
    <ContainerSectionSkills>
      <TopContainerSkills>
        <TextColor>
          <strong>Stacks</strong>
        </TextColor>
        <SelectStackType />
      </TopContainerSkills>
      <ContainerStacks>
        {stacks.map((stack) => {
          return <Stack key={stack.stack} stack={stack.stack} color={stack.color} icon={stack.icon} />;
        })}
      </ContainerStacks>
    </ContainerSectionSkills>
  );
}
