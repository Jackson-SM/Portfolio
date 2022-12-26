import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';

import {
  StyledSelectContent,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewport,
} from './styles';

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
            <StyledSelectItem value="backend">Back-end</StyledSelectItem>
            <StyledSelectItem value="frontend">Front-end</StyledSelectItem>
            <StyledSelectItem value="database">Database</StyledSelectItem>
          </StyledSelectViewport>
        </StyledSelectContent>
      </StyledSelectPortal>
    </StyledSelectRoot>
  );
}
