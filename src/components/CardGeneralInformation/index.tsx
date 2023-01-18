import React from 'react';

import { NumberInCenter, StyledCardGeneralInformation, TitleCardGeneral } from './styles';

type CardGeneralProps = React.ComponentProps<typeof StyledCardGeneralInformation> & {
  title: string;
  number: number;
};

export function CardGeneralInformation({ children, title, number, ...props }: CardGeneralProps) {
  return (
    <StyledCardGeneralInformation {...props}>
      <TitleCardGeneral>{title}</TitleCardGeneral>
      <NumberInCenter>{number}+</NumberInCenter>
    </StyledCardGeneralInformation>
  );
}
