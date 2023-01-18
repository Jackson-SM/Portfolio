import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Main } from './components/Main';
import { GeneralInformation } from './components/SectionGeneralInformation';
import { SectionHero } from './components/SectionHero';
import { SectionServices } from './components/SectionServices';
import SectionSkillsTwo from './components/SectionSkillsTwo';

export function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <SectionHero />
        <SectionServices />
        <SectionSkillsTwo />
        <GeneralInformation />
      </Main>
    </>
  );
}
