import { CodeIcon } from '@radix-ui/react-icons';
import React from 'react';

import { StringProjectAmount, StringStack, StyledIconStack, StyledStack } from './styles';

interface IStackProps extends React.ComponentProps<typeof StyledStack> {
  stack: string;
  color?: string;
  icon?: JSX.Element;
}

export function Stack({ stack, color, icon }: IStackProps) {
  const colorExist = color ?? '$primary';

  return (
    <StyledStack
      css={{
        background: `linear-gradient(to left,transparent 10%,${colorExist})`,
        '&:hover': {
          '& .icon_stack': {
            boxShadow: `0 0 5px 5px ${colorExist}`,
          },
        },
      }}
    >
      <StyledIconStack
        className="icon_stack"
        css={{
          '& svg': {
            color: `${colorExist}`,
          },
        }}
      >
        {icon ?? <CodeIcon />}
      </StyledIconStack>
      <StringStack>{stack}</StringStack>
      <StringProjectAmount>Projetos +2</StringProjectAmount>
    </StyledStack>
  );
}
