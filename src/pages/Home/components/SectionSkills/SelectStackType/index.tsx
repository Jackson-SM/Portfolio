import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';

import { stackTypes } from '..';

import {
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectIconIndicator,
  StyledSelectItem,
  StyledSelectItemText,
  StyledSelectLabel,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewport,
} from './styles';

type SelectItemProps = React.ComponentProps<typeof StyledSelectItem>;

function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <StyledSelectItem {...props}>
      <StyledSelectItemText>{children}</StyledSelectItemText>
      <StyledSelectIconIndicator>
        <CheckIcon />
      </StyledSelectIconIndicator>
    </StyledSelectItem>
  );
}

type SelectStackTypeProps = {
  changeValueStackType: (stacks: stackTypes) => void;
};

export function SelectStackType({ changeValueStackType }: SelectStackTypeProps) {
  return (
    <StyledSelectRoot defaultValue="all" onValueChange={changeValueStackType}>
      <StyledSelectTrigger>
        <StyledSelectValue placeholder="Select an Stack" />
        <StyledSelectIcon>
          <ChevronDownIcon />
        </StyledSelectIcon>
      </StyledSelectTrigger>
      <StyledSelectPortal>
        <StyledSelectContent>
          <StyledSelectViewport>
            <StyledSelectGroup>
              <StyledSelectLabel>Stacks</StyledSelectLabel>
              <SelectItem value="all">All Stacks</SelectItem>
              <SelectItem value="frontend">Front-end</SelectItem>
              <SelectItem value="backend">Back-end</SelectItem>
              <SelectItem value="database">Database</SelectItem>
            </StyledSelectGroup>
          </StyledSelectViewport>
        </StyledSelectContent>
      </StyledSelectPortal>
    </StyledSelectRoot>
  );
}
