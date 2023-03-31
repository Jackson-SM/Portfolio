import { SiJest, SiNodedotjs, SiPhp, SiTypescript } from 'react-icons/si';

import { StacksType } from './stacksType';

export const stacksBack: StacksType[] = [
  {
    title: 'Node.JS',
    icon: <SiNodedotjs />,
    description: 'Construções de Api utilizando Node.JS dentre outros frameworks como Nest.JS ou Adonis.JS',
    color: '#2eb903',
  },
  {
    title: 'Typescript',
    icon: <SiTypescript />,
    description:
      'Integrando Typescript ao node em apis robustas com frameworks que permitam a utilização de Typescript.',
    color: '#34aaee',
  },
  {
    title: 'PHP',
    icon: <SiPhp />,
    description:
      'Conhecimento intermediário em PHP, tendo um projeto grande (site de filmes) com opções de upload utilizando MySQL.',
    color: '#3c70b4',
  },
  {
    title: 'Jest Library',
    icon: <SiJest />,
    description:
      'Atualmente utilizo sempre que possível em minhas aplicações, mantendo uma maior eficácia e facilidade em manutenção.',
    color: '#ad63a7',
  },
];
