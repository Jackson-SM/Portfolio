import { DiscordLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

import photo from '../../../../assets/photo_2.jpg';
import { TextColor } from '../../../../components/TextColor';
import { ContainerApresentation, ContainerHero, ContainerInfo, ContainerPersonInfo, StyledPhoto } from './styles';

export function SectionHero() {
  return (
    <ContainerHero>
      <ContainerApresentation>
        <TextColor size="large_xx">
          Hi, i'm <strong>Web Developer</strong>.
        </TextColor>
        <TextColor size="small" as="span">
          Sou um desenvolvedor web e sempre fui apaixonado em TI, em especial, programação. Comecei a programar com 15
          anos utilizando php e python, hoje utilizo diversas tecnologias e busco avançar meus conhecimentos na área
          cada vez mais. Sou um desenvolvedor com poucas experiências profissionais porém uma grande produtividade e
          acostumado a trabalhar em equipe.
        </TextColor>
      </ContainerApresentation>

      <ContainerInfo>
        <ContainerPersonInfo>
          <StyledPhoto src={photo} />
          <TextColor size="medium" css={{ marginTop: '20px' }}>
            <strong>Jackson Magalhães</strong>
          </TextColor>
          <TextColor size="small_low" as="span">
            <strong>Full-Stack</strong> Developer
          </TextColor>
        </ContainerPersonInfo>
      </ContainerInfo>
    </ContainerHero>
  );
}
