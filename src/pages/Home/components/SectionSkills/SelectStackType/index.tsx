import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';

import {
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
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
    </StyledSelectItem>
  );
}

export function SelectStackType() {
  return (
    <StyledSelectRoot>
      <StyledSelectTrigger>
        <StyledSelectValue placeholder="Front-end" />
        <StyledSelectIcon>
          <ChevronDownIcon />
        </StyledSelectIcon>
      </StyledSelectTrigger>
      <StyledSelectPortal>
        <StyledSelectContent>
          <StyledSelectViewport>
            <StyledSelectGroup>
              <StyledSelectLabel>Stacks</StyledSelectLabel>
              <SelectItem value="backend">Back-end</SelectItem>
              <SelectItem value="frontend">Front-end</SelectItem>
              <SelectItem value="database">Database</SelectItem>
            </StyledSelectGroup>
          </StyledSelectViewport>
        </StyledSelectContent>
      </StyledSelectPortal>
    </StyledSelectRoot>
  );
}
