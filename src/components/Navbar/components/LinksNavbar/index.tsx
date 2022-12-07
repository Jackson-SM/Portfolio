import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerLinks, LinkNavbar } from './styles';

export function LinksNavbar() {
  return (
    <ContainerLinks className="links-navbar">
      <LinkNavbar to="#about">About</LinkNavbar>
      <LinkNavbar to="#skills">Skills</LinkNavbar>
      <LinkNavbar to="#objective">Objective</LinkNavbar>
      <LinkNavbar to="#networks">Networks</LinkNavbar>
      <LinkNavbar to="#contact">Contact</LinkNavbar>
      <LinkNavbar to="#services">Services</LinkNavbar>
    </ContainerLinks>
  );
}
