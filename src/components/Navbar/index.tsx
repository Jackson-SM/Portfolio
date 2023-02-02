import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React, { useState, useRef } from 'react';

import logo from '../../assets/development_2.png';
import { Box } from '../Box';
import { TextColor } from '../TextColor';
import { Themes } from '../Themes';
import { LinksNavbar } from './components/LinksNavbar';
import { ButtonOpenOrClosedNavbar, LogoNavbar, StyledLogoImage, StyledNavbar } from './styles';

export function Navbar() {
  const [minimizedNavbar, setMinimizedNavbar] = useState<boolean>(false);

  const toggleMinimizedNavbar = () => {
    setMinimizedNavbar((minimizedValueBefore) => !minimizedValueBefore);
    const carousel = document.querySelector('.carousel');
    carousel?.classList.toggle('no_scroll');
    const buttonCv = document.querySelector('.button_cv');
    buttonCv?.classList.toggle('nav_minified');
  };
  return (
    <StyledNavbar>
      <Box css={{ alignItems: 'center', gap: 5 }}>
        <StyledLogoImage src={logo} />
        <LogoNavbar>
          Jack<strong>son</strong>
        </LogoNavbar>
      </Box>
      <LinksNavbar OpenMinimizedNavbar={minimizedNavbar} toggleMinimizedNavbar={toggleMinimizedNavbar} />
      <ButtonOpenOrClosedNavbar onClick={toggleMinimizedNavbar}>
        <HamburgerMenuIcon />
      </ButtonOpenOrClosedNavbar>
    </StyledNavbar>
  );
}
