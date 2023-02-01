import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { GeneralInformation } from './components/SectionGeneralInformation';
import { SectionHero } from './components/SectionHero';
import { SectionProjects } from './components/SectionProjects';
import { SectionServices } from './components/SectionServices';
import SectionSkillsTwo from './components/SectionSkillsTwo';
import { HomeContainer } from './styles';

type HomeProps = React.ComponentProps<typeof HomeContainer>;

export function Home(props: HomeProps) {
  return (
    <HomeContainer {...props}>
      <Navbar />
      <Main>
        <SectionHero />
        <SectionServices />
        <SectionSkillsTwo />
        <GeneralInformation />
        <SectionProjects />
        <Footer />
      </Main>
    </HomeContainer>
  );
}
