import React from 'react';

import { CardGeneralInformation } from '../../../../components/CardGeneralInformation';
import { ContainerGeneralInformation, ContentGeneralInformation } from './styles';

export function GeneralInformation() {
  const generalInformations = [
    {
      title: 'Projetos',
      number: 9,
    },
    {
      title: 'Projetos em Andamento',
      number: 2,
    },
    {
      title: 'Projetos finalizados',
      number: 7,
    },
    {
      title: 'Tecnologias Dominadas',
      number: 13,
    },
    {
      title: 'Anos de Experiência',
      number: 1,
    },
  ];

  return (
    <ContainerGeneralInformation>
      <ContentGeneralInformation>
        {generalInformations.map((info) => {
          return <CardGeneralInformation key={info.title} title={info.title} number={info.number} />;
        })}
      </ContentGeneralInformation>
    </ContainerGeneralInformation>
  );
}
