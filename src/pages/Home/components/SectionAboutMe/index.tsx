import React from 'react';

import { TextColor } from '../../../../components/TextColor';
import { AboutMeCard } from './AboutMeCard';
import { ContainerSectionAboutMe, ContainerSkillsIndividualCards, TopSectionAboutMe } from './styles';

export function SectionAboutMe() {
  return (
    <ContainerSectionAboutMe>
      <TopSectionAboutMe>
        <TextColor>
          <strong>About Me</strong>
        </TextColor>
      </TopSectionAboutMe>
      <ContainerSkillsIndividualCards>
        <AboutMeCard />
        <AboutMeCard />
        <AboutMeCard />
        <AboutMeCard />
        <AboutMeCard />
      </ContainerSkillsIndividualCards>
    </ContainerSectionAboutMe>
  );
}
