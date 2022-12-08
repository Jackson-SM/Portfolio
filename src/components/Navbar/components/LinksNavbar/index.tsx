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
      <LinkNavbar to="#about">About</LinkNavbar>
      <LinkNavbar to="#skills">Skills</LinkNavbar>
      <LinkNavbar to="#objective">Objective</LinkNavbar>
      <LinkNavbar to="#networks">Networks</LinkNavbar>
      <LinkNavbar to="#contact">Contact</LinkNavbar>
      <LinkNavbar to="#services">Services</LinkNavbar>
    </ContainerLinks>
  );
}
