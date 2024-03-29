import {
  SiAdonisjs,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiRust,
  SiTypescript,
} from 'react-icons/si';

import dashboard from '../../../../assets/projects-images/dashboard.png';
import desafioFooter from '../../../../assets/projects-images/desafio_footer.png';
import desafioHero from '../../../../assets/projects-images/desafio_hero.png';
import desafioPlayers from '../../../../assets/projects-images/desafio_players.png';
import formLogin from '../../../../assets/projects-images/form_login.png';
import formRegister from '../../../../assets/projects-images/form_register.png';
import formUploadMegacine from '../../../../assets/projects-images/form_step_upload_megacine.png';
import infiniteAbout1 from '../../../../assets/projects-images/infinite_about_1.png';
import infiniteAbout2 from '../../../../assets/projects-images/infinite_about_2.png';
import infiniteAbout3 from '../../../../assets/projects-images/infinite_about_3.png';
import infiniteCards from '../../../../assets/projects-images/infinite_cards.png';
import infiniteFooter from '../../../../assets/projects-images/infinite_footer.png';
import infiniteHero from '../../../../assets/projects-images/infinite_hero.png';
import infinitePurchase from '../../../../assets/projects-images/infinite_purchase.png';
import megacineCard from '../../../../assets/projects-images/megacine_card_3.png';
import megacineDashboard from '../../../../assets/projects-images/megacine_dashboard.png';
import megacineHero from '../../../../assets/projects-images/megacine_hero.png';
import megacineResponsive from '../../../../assets/projects-images/megacine_responsive.png';
import megacineResponsive2 from '../../../../assets/projects-images/megacine_responsive2.png';
import megacineSerie from '../../../../assets/projects-images/page_serie.png';
import { itemsProjects } from './CardProject';

export const colorsStacks = [
  {
    html5: '#ff7a0e',
    css3: '#2da1ff',
    nodejs: '#34921c',
    javascript: '#f1ff2d',
    typescript: '#2dbcff',
    php: '#456a96',
    bootstrap: '#bc2dff',
    reactjs: '#10c7ff',
    jest: '#c26c91',
    rust: '#eb8e2b',
    python: '#fff04f',
    adonisjs: '#7651c4',
    nestjs: '#ff3f3f',
  },
];
export const projects: itemsProjects[] = [
  {
    title: 'Infinite',
    cover: infiniteHero,
    samples: [
      formRegister,
      formLogin,
      infiniteAbout1,
      infiniteAbout2,
      infiniteAbout3,
      infiniteCards,
      infinitePurchase,
      infiniteFooter,
      formUploadMegacine,
    ],
    stacks: [
      { name: 'HTML5', color: colorsStacks[0].html5, icon: <SiHtml5 /> },
      { name: 'CSS3', color: colorsStacks[0].css3, icon: <SiCss3 /> },
      { name: 'Javascript', color: colorsStacks[0].javascript, icon: <SiJavascript /> },
    ],
    link: 'https://github.com/Jackson-SM/infinite',
  },
  {
    title: 'DevCine',
    cover: megacineHero,
    samples: [megacineDashboard, megacineResponsive, megacineResponsive2, megacineCard, megacineSerie],
    stacks: [
      { name: 'HTML', color: colorsStacks[0].html5, icon: <SiHtml5 /> },
      { name: 'CSS3', color: colorsStacks[0].css3, icon: <SiCss3 /> },
      { name: 'Javascript', color: colorsStacks[0].javascript, icon: <SiJavascript /> },
      { name: 'PHP', color: colorsStacks[0].php, icon: <SiPhp /> },
    ],
    link: 'https://github.com/Jackson-SM/devcine',
  },
  {
    title: 'Jupiter',
    cover: megacineHero,
    samples: [megacineDashboard, megacineResponsive, megacineResponsive2, megacineCard, megacineSerie],
    stacks: [
      { name: 'Typescript', color: colorsStacks[0].typescript, icon: <SiTypescript /> },
      { name: 'Node', color: colorsStacks[0].nodejs, icon: <SiNodedotjs /> },
      { name: 'Jest', color: colorsStacks[0].jest, icon: <SiJest /> },
    ],
    link: 'https://github.com/Jackson-SM/Jupiter-API',
  },
  {
    title: 'DashLearn',
    cover: dashboard,
    stacks: [
      { name: 'Javascript', color: colorsStacks[0].javascript, icon: <SiJavascript /> },
      { name: 'ReactJS', color: colorsStacks[0].reactjs, icon: <SiReact /> },
      { name: 'Jest', color: colorsStacks[0].jest, icon: <SiJest /> },
    ],
    link: 'https://github.com/Jackson-SM/DashLearn',
  },
  {
    title: 'JK Company',
    cover: desafioHero,
    samples: [desafioPlayers, desafioFooter],
    stacks: [
      { name: 'HTML5', color: colorsStacks[0].html5, icon: <SiHtml5 /> },
      { name: 'CSS3', color: colorsStacks[0].css3, icon: <SiCss3 /> },
      { name: 'Javascript', color: colorsStacks[0].javascript, icon: <SiJavascript /> },
    ],
    link: 'https://jackson-sm.github.io/JK-Company/',
  },
  {
    title: 'Generate Password',
    cover: desafioHero,
    samples: [desafioPlayers, desafioFooter],
    stacks: [{ name: 'Rust', color: colorsStacks[0].rust, icon: <SiRust /> }],
    link: 'https://github.com/Jackson-SM/generate_password',
  },
  {
    title: 'Password Crypto',
    cover: desafioHero,
    samples: [desafioPlayers, desafioFooter],
    stacks: [{ name: 'Python', color: colorsStacks[0].python, icon: <SiPython /> }],
    link: 'https://github.com/Jackson-SM/password_crypto',
  },
  {
    title: 'Api Fulgur Filmes',
    cover: desafioHero,
    samples: [desafioPlayers, desafioFooter],
    stacks: [
      { name: 'Node', color: colorsStacks[0].nodejs, icon: <SiNodedotjs /> },
      { name: 'Typescript', color: colorsStacks[0].typescript, icon: <SiTypescript /> },
      { name: 'Adonisjs', color: colorsStacks[0].adonisjs, icon: <SiAdonisjs /> },
    ],
    link: 'https://github.com/Jackson-SM/api-fulgurfilmes',
  },
  {
    title: 'NotificationService',
    cover: desafioHero,
    samples: [desafioPlayers, desafioFooter],
    stacks: [
      { name: 'Node', color: colorsStacks[0].nodejs, icon: <SiNodedotjs /> },
      { name: 'Typescript', color: colorsStacks[0].typescript, icon: <SiTypescript /> },
      { name: 'Nestjs', color: colorsStacks[0].nestjs, icon: <SiNestjs /> },
    ],
    link: 'https://github.com/Jackson-SM/NotificationService',
  },
];
