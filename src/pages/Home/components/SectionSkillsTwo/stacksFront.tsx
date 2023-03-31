import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';

import { StacksType } from './stacksType';

export const stacksFront: StacksType[] = [
  {
    title: 'Hyper Text Markup Language (HTML)',
    icon: <SiHtml5 />,
    description: 'Utilizo HTML em 100% dos meus projetos atualmente.',
    color: '#fc6a26',
  },
  {
    title: 'Cascading Style Sheets (CSS)',
    icon: <SiCss3 />,
    description: 'Presente na maioria dos meus projetos atuais e anteriores.',
    color: '#2695fc',
  },
  {
    title: 'Javascript (JS)',
    icon: <SiJavascript />,
    description: 'Detenho um bom conhecimento em Javascript, tendo +4 projetos utilizando essa tecnologica.',
    color: '#fce726',
  },
  {
    title: 'React JS',
    icon: <SiReact />,
    description: 'Desenvolvedor Junior em React.JS, com +4 projetos, incluindo este portfólio.',
    color: '#00e1ff',
  },
  {
    title: 'TailwindCSS',
    icon: <SiTailwindcss />,
    description: 'Em processo de desenvolvimento, possuo uma landing page completa utilizando TailwindCSS',
    color: '#36aee6',
  },
  {
    title: 'Bootstrap',
    icon: <SiBootstrap />,
    description:
      'Ferramenta que utilizo para uma maior agilidade em meus projetos, contendo +2 projetos utilizando bootstrap.',
    color: '#ad34e6',
  },
];
