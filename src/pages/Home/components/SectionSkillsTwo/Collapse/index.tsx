import React, { useState } from 'react';
import { BsCodeSlash } from 'react-icons/bs';

import { CardSkill } from '../CardSkill';
import { CollapseSkills, IPropsCollapseSkills } from '../CollapseSkill';
import { StacksType } from '../stacksType';
import * as CollapseElements from './styles';

interface ICollapse {
  stackSkill: StacksType[];
  collapseSkillProps: IPropsCollapseSkills;
}

export function Collapse({ stackSkill, title, collapseSkillProps }: ICollapse) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <CollapseElements.CollapseCollections onClick={() => setCollapsed((isCollapsed) => !isCollapsed)}>
      <CollapseSkills {...collapseSkillProps} />
      <CollapseElements.ContentSkillsBody collapsed={collapsed}>
        {stackSkill.map((stack, index) => {
          const isLastChild = stackSkill.length - 1 === index;

          return <CardSkill key={stack.color} stack={stack} lastChild={isLastChild} />;
        })}
      </CollapseElements.ContentSkillsBody>
    </CollapseElements.CollapseCollections>
  );
}
