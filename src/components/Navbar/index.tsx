import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import { TextColor } from '../TextColor';
import { LinksNavbar } from './components/LinksNavbar';
import { ButtonOpenOrClosedNavbar, StyledNavbar } from './styles';

export function Navbar() {
  const [minimizedNavbar, setMinimizedNavbar] = useState<boolean>(false);

  const toggleMinimizedNavbar = () => {
    setMinimizedNavbar((minimizedValueBefore) => !minimizedValueBefore);
  };
  return (
    <StyledNavbar>
      <TextColor>
        Port<strong>fólio</strong>
      </TextColor>
      <LinksNavbar OpenMinimizedNavbar={minimizedNavbar} toggleMinimizedNavbar={toggleMinimizedNavbar} />
      <ButtonOpenOrClosedNavbar onClick={toggleMinimizedNavbar}>
        <HamburgerMenuIcon />
      </ButtonOpenOrClosedNavbar>
    </StyledNavbar>
  );
}
