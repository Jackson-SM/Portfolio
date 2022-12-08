import { DiscordLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

import photo from '../../../../assets/photo.jpeg';
import { LinkRedirect } from '../../../../components/LinkRedirect';
import { TextColor, TextColorSpan } from '../../../../components/TextColor';
import {
  ContainerApresentation,
  ContainerApresentationInfo,
  ContainerHero,
  ContainerInfo,
  ContainerNetworks,
  ContainerPersonInfo,
  StyledPhoto,
} from './styles';

export function SectionHero() {
  return (
    <ContainerHero>
      <ContainerApresentation>
        <ContainerApresentationInfo>
          <TextColor size="large_xx">
            Hi, i'm <strong>Web Developer</strong>.
          </TextColor>
          <TextColorSpan size="small_low">
            Sou um desenvolvedor web e sempre fui apaixonado em TI, em especial, programação. Comecei a programar com 15
            anos utilizando php e python, hoje utilizo diversas tecnologias e busco avançar meus conhecimentos na área
            cada vez mais. Sou um desenvolvedor com poucas experiências profissionais porém uma grande produtividade e
            acostumado a trabalhar em equipe.
          </TextColorSpan>
        </ContainerApresentationInfo>
        <ContainerNetworks>
          <LinkRedirect href="https://discord.com/channels/@me/718871532864143517" target="__blank">
            <DiscordLogoIcon />
          </LinkRedirect>

          <LinkRedirect href="https://www.linkedin.com/in/jackson-magalhaes/" target="__blank">
            <LinkedInLogoIcon />
          </LinkRedirect>

          <LinkRedirect href="https://github.com/Jackson-SM" target="__blank">
            <GitHubLogoIcon />
          </LinkRedirect>
        </ContainerNetworks>
      </ContainerApresentation>

      <ContainerInfo>
        <ContainerPersonInfo>
          <StyledPhoto src={photo} />
          <TextColor size="medium" css={{ marginTop: '20px' }}>
            <strong>Jackson Magalhães</strong>
          </TextColor>
          <TextColorSpan size="small_low">
            <strong>Front-end</strong> Developer
          </TextColorSpan>
        </ContainerPersonInfo>
      </ContainerInfo>
    </ContainerHero>
  );
}
