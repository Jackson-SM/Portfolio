import React from 'react';

import Javascript from '../../../../assets/icons_stacks/logo-javascript.svg';
import NestJs from '../../../../assets/icons_stacks/nestjs.svg';
import NodeJs from '../../../../assets/icons_stacks/nodejs-1.svg';
import react from '../../../../assets/icons_stacks/react-2.svg';
import Typescript from '../../../../assets/icons_stacks/typescript.svg';
import VsCode from '../../../../assets/icons_stacks/visual-studio-code-1.svg';
import photo from '../../../../assets/photo.jpeg';
import { Box } from '../../../../components/Box';
import { Button } from '../../../../components/Button';
import { TextColor } from '../../../../components/TextColor';
import {
  IconStack,
  ContainerApresentation,
  ContainerHero,
  ContainerInfo,
  ContainerPersonInfo,
  ContainerStacks,
  ContentHero,
  StyledPhoto,
  showIcon,
} from './styles';

export function SectionHero() {
  const stacksImages = [Javascript, NodeJs, NestJs, react, Typescript, VsCode];

  return (
    <ContainerHero id="aboutme">
      <ContentHero>
        <ContainerApresentation>
          <TextColor size="large_xx">
            Olá, Eu sou um <strong>Desenvolvedor Web</strong>.
          </TextColor>
          <TextColor size="small" as="span" css={{ color: '$textDark' }}>
            Sou um desenvolvedor web e sempre fui apaixonado em TI. Comecei a programar com 15 anos utilizando php e
            python, hoje utilizo diversas tecnologias e busco <strong>avançar</strong> meus conhecimentos na área cada
            vez mais. Sou um desenvolvedor com poucas experiências profissionais porém uma grande{' '}
            <strong>produtividade</strong> e acostumado a <strong>trabalhar em equipe</strong>.
          </TextColor>
          <Box
            css={{
              gap: 10,
              pointerEvents: 'auto',
              '@large': { justifyContent: 'center' },
            }}
          >
            <Button
              as="a"
              target="__blank"
              href="https://drive.google.com/uc?export=download&id=1gheWgUHUbT3aHuPqIxXB-St6K1E1IQ1r"
              color="primary"
              css={{ width: 'max-content', pointerEvents: 'auto' }}
            >
              Download CV
            </Button>
          </Box>
        </ContainerApresentation>

        <ContainerInfo>
          <ContainerPersonInfo>
            <Box
              css={{
                padding: 5,
                borderRadius: '100%',
                linearGradient: '245deg,$primary,transparent',
              }}
            >
              <StyledPhoto src={photo} css={{}} />
            </Box>
            <TextColor
              size="medium"
              css={{
                marginTop: '20px',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                linearGradient: 'to right,$primary 50%,$primaryLight',
              }}
            >
              Jackson Magalhães
            </TextColor>
            <TextColor size="small_low" as="span">
              <strong>Full-Stack</strong> Developer
            </TextColor>
          </ContainerPersonInfo>
        </ContainerInfo>
      </ContentHero>
      <ContainerStacks>
        {stacksImages.map((img, index) => {
          return (
            <IconStack
              style={{
                animation: `${showIcon} 1s ease-in-out`,
                animationDelay: `${(index + 1) / 2}s`,
                animationFillMode: 'forwards',
              }}
              key={img.toString()}
            >
              <img src={img} alt="" />
            </IconStack>
          );
        })}
      </ContainerStacks>
    </ContainerHero>
  );
}
