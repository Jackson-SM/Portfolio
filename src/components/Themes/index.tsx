import React from 'react';

import * as Theme from './styles';

export function Themes() {
  return (
    <Theme.ThemeContainer>
      <Theme.ThemesContainer>
        <h1>Dark</h1>
        <h1>Light</h1>
      </Theme.ThemesContainer>
    </Theme.ThemeContainer>
  );
}
