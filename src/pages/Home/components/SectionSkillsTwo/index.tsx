import React from 'react';

import iconBack from '../../../../assets/icons_stacks/backend.svg';
import iconData from '../../../../assets/icons_stacks/data.svg';
import iconDevops from '../../../../assets/icons_stacks/devops.svg';
import iconFront from '../../../../assets/icons_stacks/frontend.svg';
import { BackendIcon } from '../../../../components/DevIcons/BackendIcon';
import { DatabaseIcon } from '../../../../components/DevIcons/DatabaseIcon';
import { DevopsIcon } from '../../../../components/DevIcons/DevopsIcon';
import { FrontendIcon } from '../../../../components/DevIcons/FrontendIcon';
import { TopSections } from '../../../../components/TopSections';
import { TitleSection } from '../TitleSection';
import { Collapse } from './Collapse';
import { stacksBack } from './stacksBack';
import { stacksDatabases } from './stacksDatabases';
import { stacksDevops } from './stacksDevops';
import { stacksFront } from './stacksFront';
import * as SkillsTwo from './styles';

function SectionSkillsTwo() {
  return (
    <SkillsTwo.ContainerSectionTwo id="skills">
      <TopSections>
        <TitleSection color="primary">Minhas Habilidades</TitleSection>
      </TopSections>

      <SkillsTwo.ContentSectionTwo>
        <Collapse
          stackSkill={stacksFront}
          collapseSkillProps={{ title: 'Front-End', icon: <FrontendIcon color="white" /> }}
        />
        <Collapse
          stackSkill={stacksBack}
          collapseSkillProps={{ title: 'Back-End', icon: <BackendIcon color="white" /> }}
        />
        <Collapse
          stackSkill={stacksDatabases}
          collapseSkillProps={{ title: 'Database', icon: <DatabaseIcon color="white" /> }}
        />
        <Collapse
          stackSkill={stacksDevops}
          collapseSkillProps={{ title: 'DevOps', icon: <DevopsIcon color="white" /> }}
        />
      </SkillsTwo.ContentSectionTwo>
    </SkillsTwo.ContainerSectionTwo>
  );
}

export default SectionSkillsTwo;
