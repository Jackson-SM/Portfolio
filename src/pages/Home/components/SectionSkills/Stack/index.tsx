import { CodeIcon } from '@radix-ui/react-icons';
import React from 'react';

import {
  ContainerStackAndAmountProject,
  StringProjectAmount,
  StringStack,
  StyledIconStack,
  StyledStack,
} from './styles';

interface IStackProps extends React.ComponentProps<typeof StyledStack> {
  stack: string;
  color?: string;
  icon?: JSX.Element;
}

export function Stack({ stack, color, icon }: IStackProps) {
  const colorExist = color ?? '$primary';

  return (
    <StyledStack css={{ background: `linear-gradient(to right,transparent 10%,${colorExist})` }}>
      <StyledIconStack
        css={{
          '& svg': {
            color: `${colorExist}`,
          },
        }}
      >
        {icon ?? <CodeIcon />}
      </StyledIconStack>
      <ContainerStackAndAmountProject>
        <StringStack>{stack}</StringStack>
        <StringProjectAmount>Projetos +2</StringProjectAmount>
      </ContainerStackAndAmountProject>
    </StyledStack>
  );
}
