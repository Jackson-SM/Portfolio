import React from 'react';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

import imgs from '../../../../assets/development_2.png';
import { TitleSection } from '../TitleSection';
import { CardSkill } from './CardSkill';
import { StyledSkillsCard } from './CardSkill/styles';
import {
  ContainerCarouselProjects,
  ContainerSectionTwo,
  ContentSectionTwo,
  ContentSkillsSection,
  TopContainerSectionTwo,
} from './styles';

function SectionSkillsTwo() {
  return (
    <ContainerSectionTwo>
      <TopContainerSectionTwo>
        <TitleSection color="primary">My Skills</TitleSection>
        <TitleSection size="md">My Experiences</TitleSection>
      </TopContainerSectionTwo>
      <ContentSectionTwo>
        <ContentSkillsSection>
          <CardSkill
            title="Hyper Text Markup Language(HTML)"
            icon={<SiHtml5 />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#fc6a26"
            knowledgeAmount={62}
          />
          <CardSkill
            title="Cascading Style Sheets(CSS)"
            icon={<SiCss3 />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#2695fc"
            knowledgeAmount={45}
          />
          <CardSkill
            title="Hyper Text Markup Language(HTML)"
            icon={<SiJavascript />}
            description="I Have 3 years Experience in HTML and i Completed 100+ HTML Projects"
            color="#fce726"
            knowledgeAmount={24}
          />
        </ContentSkillsSection>
        <ContainerCarouselProjects>
          <img src={imgs} alt="" />
        </ContainerCarouselProjects>
      </ContentSectionTwo>
    </ContainerSectionTwo>
  );
}

export default SectionSkillsTwo;
