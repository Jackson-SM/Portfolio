import React, { useState } from 'react';
import { BsCodeSlash, BsServer } from 'react-icons/bs';
import { SiNintendogamecube } from 'react-icons/si';

import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { CardSkill } from './CardSkill';
import { Collapse } from './Collapse';
import { CollapseSkills } from './CollapseSkill';
import { stacksBack } from './stacksBack';
import { stacksDatabases } from './stacksDatabases';
import { stacksFront } from './stacksFront';
import * as SkillsTwo from './styles';

function SectionSkillsTwo() {
  return (
    <SkillsTwo.ContainerSectionTwo id="skills">
      <TopSections>
        <TitleSection color="primary">Minhas Habilidades</TitleSection>
      </TopSections>

      <SkillsTwo.ContentSectionTwo>
        <Collapse stackSkill={stacksFront} collapseSkillProps={{ title: 'Front-End', icon: <BsCodeSlash /> }} />
        <Collapse stackSkill={stacksBack} collapseSkillProps={{ title: 'Back-End', icon: <SiNintendogamecube /> }} />
        <Collapse stackSkill={stacksDatabases} collapseSkillProps={{ title: 'Database', icon: <BsServer /> }} />
      </SkillsTwo.ContentSectionTwo>
    </SkillsTwo.ContainerSectionTwo>
  );
}

export default SectionSkillsTwo;
