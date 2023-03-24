import { DiscordLogoIcon, GitHubLogoIcon, GlobeIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

import { TitleContent, TitleIcon } from '../styles';
import { ContainerNetworks, ContentNetworks, IconNetwork, NetworkCard, TitleNetwork } from './styles';

export function Networks() {
  const networks = [
    { name: 'Github', icon: <GitHubLogoIcon />, link: 'https://github.com/Jackson-SM' },
    { name: 'Linkedin', icon: <LinkedInLogoIcon />, link: 'https://www.linkedin.com/in/jackson-magalhaes/' },
    { name: 'Discord', icon: <DiscordLogoIcon />, link: 'https://discord.com/channels/@me/718871532864143517' },
  ];

  return (
    <ContainerNetworks>
      <TitleContent>
        <TitleIcon>
          <GlobeIcon />
        </TitleIcon>
        Redes
      </TitleContent>
      <ContentNetworks>
        {networks.map((network) => {
          return (
            <NetworkCard key={network.name} href={network.link} target="__blank">
              <IconNetwork className="icon_network">{network.icon}</IconNetwork>
              <TitleNetwork>{network.name}</TitleNetwork>
            </NetworkCard>
          );
        })}
      </ContentNetworks>
    </ContainerNetworks>
  );
}
