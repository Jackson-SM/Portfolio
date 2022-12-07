import { DiscordLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

import photo from '../../../../assets/photo.jpeg';
import { LinkRedirect } from '../../../../components/LinkRedirect';
import { TextColor } from '../../../../components/TextColor';
import { ContainerHero, ContainerInfo, ContainerNetworks, ContainerPersonInfo, StyledPhoto } from './styles';

export function SectionHero() {
  return (
    <ContainerHero>
      <ContainerInfo>
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
        <ContainerPersonInfo>
          <StyledPhoto src={photo} />
          <TextColor size="medium">
            <strong>Jackson Magalhães</strong>
          </TextColor>
          <TextColor size="small_low">
            <strong>Front-end</strong> Developer
          </TextColor>
        </ContainerPersonInfo>
      </ContainerInfo>
    </ContainerHero>
  );
}
