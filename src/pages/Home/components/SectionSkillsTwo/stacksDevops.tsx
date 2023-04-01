import { SiDocker, SiGit } from 'react-icons/si';

import { StacksType } from './stacksType';

export const stacksDevops: StacksType[] = [
  {
    title: 'Docker',
    icon: <SiDocker />,
    description: 'Tecnologia de conteinerização para criação e uso de containers Linux',
    color: '#1fc9e3',
  },
  {
    title: 'Git',
    icon: <SiGit />,
    description: 'Banco relacional sendo o meu principal mais utilizado em meus projetos, estando em sua maioria.',
    color: '#f16034',
  },
];
