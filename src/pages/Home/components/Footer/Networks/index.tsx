import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

import { ContainerNetworks, IconNetwork, NetworkCard, TitleNetwork } from './styles';

export function Networks() {
  const networks = [
    { name: 'Github', icon: <GitHubLogoIcon />, link: 'https://github.com/Jackson-SM' },
    { name: 'Linkedin', icon: <LinkedInLogoIcon />, link: 'https://www.linkedin.com/in/jackson-magalhaes/' },
    { name: 'Discord', icon: <DiscordLogoIcon />, link: 'https://discord.com/channels/@me/718871532864143517' },
  ];

  return (
    <ContainerNetworks>
      {networks.map((network) => {
        return (
          <NetworkCard key={network.name} href={network.link}>
            <IconNetwork>{network.icon}</IconNetwork>
            <TitleNetwork>{network.name}</TitleNetwork>
          </NetworkCard>
        );
      })}
    </ContainerNetworks>
  );
}
