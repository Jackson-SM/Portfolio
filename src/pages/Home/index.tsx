import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Main } from './components/Main';
import { SectionAboutMe } from './components/SectionAboutMe';
import { SectionHero } from './components/SectionHero';

export function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <SectionHero />
        <SectionAboutMe />
      </Main>
    </>
  );
}
