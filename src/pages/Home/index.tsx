import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Main } from './components/Main';
import { SectionAboutMe } from './components/SectionAboutMe';
import { SectionHero } from './components/SectionHero';
import SectionSkillsTwo from './components/SectionSkillsTwo';

export function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <SectionHero />
        <SectionAboutMe />
        <SectionSkillsTwo />
      </Main>
    </>
  );
}
