import { DiscordLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

import photo from '../../../../assets/photo.jpeg';
import { Box } from '../../../../components/Box';
import { Button } from '../../../../components/Button';
import { TextColor } from '../../../../components/TextColor';
import { ContainerApresentation, ContainerHero, ContainerInfo, ContainerPersonInfo, StyledPhoto } from './styles';

export function SectionHero() {
  return (
    <ContainerHero>
      <ContainerApresentation>
        <TextColor size="large_xx">
          Hi, i'm <strong>Web Developer</strong>.
        </TextColor>
        <TextColor size="small" as="span" css={{ color: '$textDark' }}>
          Sou um <strong>desenvolvedor</strong> web e sempre fui apaixonado em TI. Comecei a programar com 15 anos
          utilizando php e python, hoje utilizo diversas tecnologias e busco avançar meus conhecimentos na área cada vez
          mais. Sou um desenvolvedor com poucas experiências profissionais porém uma grande produtividade e acostumado a
          trabalhar em equipe.
        </TextColor>
        <Box css={{ gap: 10 }}>
          <Button outlined="primary" rounded css={{ width: 'max-content' }}>
            Download CV
          </Button>
          <Button outlined="primary" rounded css={{ width: 'max-content' }}>
            About Me
          </Button>
        </Box>
      </ContainerApresentation>

      <ContainerInfo>
        <ContainerPersonInfo>
          <Box css={{ padding: 5, background: '$primaryLight', borderRadius: '100%' }}>
            <StyledPhoto src={photo} />
          </Box>
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
