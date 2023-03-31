import { SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';

import { StacksType } from './stacksType';

export const stacksDatabases: StacksType[] = [
  {
    title: 'MySQL',
    icon: <SiMysql />,
    description: '1 ano utilizando MySQL em projetos pessoais.',
    color: '#eb9871',
  },
  {
    title: 'PostgreSQL',
    icon: <SiPostgresql />,
    description: 'Banco relacional sendo o meu principal mais utilizado em meus projetos, estando em sua maioria.',
    color: '#4f75af',
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb />,
    description: 'Apenas uma api utilizando MongoDB, porém avançando nos estudos de NoSQL.',
    color: '#09610d',
  },
];
