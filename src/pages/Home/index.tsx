import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Main } from './components/Main';
import { SectionAboutMe } from './components/SectionAboutMe';
import { SectionHero } from './components/SectionHero';
import { SectionSkills } from './components/SectionSkills';

export function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <SectionHero />
        <SectionAboutMe />
        <SectionSkills />
      </Main>
    </>
  );
}
