import React from 'react';

import * as Collapse from './styles';
import { CollapseSkill } from './styles';

export interface IPropsCollapseSkills extends React.ComponentProps<typeof CollapseSkill> {
  title: string;
  icon: JSX.Element;
}

export function CollapseSkills({ title, icon, ...props }: IPropsCollapseSkills) {
  return (
    <Collapse.CollapseSkill {...props}>
      {icon} {title}
    </Collapse.CollapseSkill>
  );
}
