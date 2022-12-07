import React from 'react';

import { TextColor } from '../TextColor';
import { LinksNavbar } from './components/LinksNavbar';
import { StyledNavbar } from './styles';

export function Navbar() {
  return (
    <StyledNavbar>
      <TextColor>
        Port<strong>fólio</strong>
      </TextColor>
      <LinksNavbar />
    </StyledNavbar>
  );
}
