import { Cross1Icon } from '@radix-ui/react-icons';
import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonOpenOrClosedNavbar } from '../../styles';
import { ContainerLinks, LinkNavbar } from './styles';

type PropsLinksNavbarFromContainerLinks = React.ComponentProps<typeof ContainerLinks> & {
  toggleMinimizedNavbar: () => void;
};

export function LinksNavbar({ toggleMinimizedNavbar, ...props }: PropsLinksNavbarFromContainerLinks) {
  return (
    <ContainerLinks {...props} className="links-navbar">
      <ButtonOpenOrClosedNavbar onClick={toggleMinimizedNavbar}>
        <Cross1Icon />
      </ButtonOpenOrClosedNavbar>
      <LinkNavbar href="#aboutme">Sobre mim</LinkNavbar>
      <LinkNavbar href="#services">Serviços</LinkNavbar>
      <LinkNavbar href="#skills">Habilidades</LinkNavbar>
      <LinkNavbar href="#projects">Projetos</LinkNavbar>
      <LinkNavbar href="#contact">Contatos</LinkNavbar>
    </ContainerLinks>
  );
}
