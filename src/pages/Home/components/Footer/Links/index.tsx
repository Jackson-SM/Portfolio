import { ReaderIcon } from '@radix-ui/react-icons';
import React from 'react';

import { TitleContent, TitleIcon } from '../styles';
import { ContainerLinks, ContentLinks, LinkFooter, TopContainerLinks } from './styles';

export function Links() {
  return (
    <ContainerLinks>
      <TopContainerLinks>
        <TitleContent>
          <TitleIcon>
            <ReaderIcon />
          </TitleIcon>
          Informações
        </TitleContent>
      </TopContainerLinks>
      <ContentLinks>
        <LinkFooter href="#aboutme">Sobre mim</LinkFooter>
        <LinkFooter href="#skills">Habilidades</LinkFooter>
        <LinkFooter href="#projects">Projetos</LinkFooter>
        <LinkFooter href="#services">Serviços</LinkFooter>
      </ContentLinks>
    </ContainerLinks>
  );
}
