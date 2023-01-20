import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import logo from '../../assets/development_2.png';
import { Box } from '../Box';
import { TextColor } from '../TextColor';
import { LinksNavbar } from './components/LinksNavbar';
import { ButtonOpenOrClosedNavbar, StyledLogoImage, StyledNavbar } from './styles';

export function Navbar() {
  const [minimizedNavbar, setMinimizedNavbar] = useState<boolean>(false);

  const toggleMinimizedNavbar = () => {
    setMinimizedNavbar((minimizedValueBefore) => !minimizedValueBefore);
    const carousel = document.querySelector('.carousel');
    carousel?.classList.toggle('no_scroll');
  };
  return (
    <StyledNavbar>
      <Box css={{ alignItems: 'center', gap: 5 }}>
        <StyledLogoImage src={logo} />
        <TextColor>
          Jack<strong>son</strong>
        </TextColor>
      </Box>
      <LinksNavbar OpenMinimizedNavbar={minimizedNavbar} toggleMinimizedNavbar={toggleMinimizedNavbar} />
      <ButtonOpenOrClosedNavbar onClick={toggleMinimizedNavbar}>
        <HamburgerMenuIcon />
      </ButtonOpenOrClosedNavbar>
    </StyledNavbar>
  );
}
