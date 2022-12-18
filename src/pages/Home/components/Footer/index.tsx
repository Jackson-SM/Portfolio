import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

import { LinkRedirect } from '../../../../components/LinkRedirect';
import { ContainerNetworks } from '../SectionHero/styles';

export function Footer() {
  return (
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
  );
}
