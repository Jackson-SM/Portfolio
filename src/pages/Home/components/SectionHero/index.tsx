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
              href="https://doc-04-78-docs.googleusercontent.com/docs/securesc/j6eoctctdl6db9fq2sjss1ovt67vd97u/mbnp35fvks6n5s5o9htf18iahk2koa70/1680624075000/16783744537518786795/16783744537518786795/1DK31ohj10Wet7K1VA4COviy-BmYq3D_r?e=download&ax=ALy03A4dFmj_ldUvaWXiCR60f99AZyHk6quNeRODeFi7PmMzNDY7FPRB7NM4OYhndc9PCmS7h2wKopbn9ptVy7E9KBKeFB-hQ69Qm2MV1HXFeV84vto0FMOZhKpzw_lRLpOWcENZGJ26w-8ZwNn0c027Zq_hVCtZhClGLLxWQM2SiCx36QZiJB7ATUWUocPcwu0KlhmhXdPuj1MAXIYLm4aJyy6x8NR-ClMA2nmu_867C4bs7_k_ZsOh0a4US1KlouWaCf5dBRZ7c3tIJ1b4w_SE5naJkWEgAPF_PcLXRAF454p1pK4bcXFkuK5Q7mVqc9UYwxn3dPpXS1hwzPMWapGhdNA60xLruJmEG0V96N-vGo1Kc7_xvr1xUegAw-49WjiX2DUKIpJ5N5eZwbCfDUT4o-HW-7UeDN68lKkKB0He9YY8dJ7_0QpgTbdyOE7CIx0BeznAiX1W_9PuJtoBS-V7emKW0WMs6_nur_aDG8Y2vOb7WE5xCASTrKZrK1Y7TxNqxjADohqEeKOZ52x60377V6zL2iHK0PIduP-LAig7mmGKi6PasULFkNG6n9IvNoaYrRMe3UX-HjEMzCrutSxRrh9slKlYnGzOeIE0NLVOCag_Gf20-IJ5gGyegAvUX8k5-HX9geMNgnsM7tS6VtRAB7J-_MY0d-zAejN2rns9UWQIhwnPgfA963j7C8_GaprJDmVzL6oBf3Z7JL78MYUBnkUFCQKx-jX2cTsCm5kgE5UXyqAtU4kyCg556ny9dUOAPVBZNxs2pKKikw3MfhU3gAOn2frTFPPUNAeccVgTEW1eZ7gDvUWYbHKndzeKSJM4HPkjmEjnXNLmwnvFi45ikETQbAgU54DtKnyAw97IdIoKuvOB9kDcJLpP7KJgluzvwSYUcXOIbmPQdXeSxMlijNzpxyxbvuKIpltG4Elhiv7aV2T5g6q70jHS_dowAd7yjnyT5O4&uuid=1e499641-9fac-48ce-ac19-81945904e57d&authuser=2&nonce=4vodo94o4th4q&user=16783744537518786795&hash=6k6h6i1g7co5747e42vv0igbkp9gm43a"
              color="primary"
              rounded
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
