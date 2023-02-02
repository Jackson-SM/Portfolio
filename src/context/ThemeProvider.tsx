import React, { createContext, useState, useEffect } from 'react';

import { blueTheme } from '../styles/themes/blue';
import { purpleTheme } from '../styles/themes/purple';
import { redTheme } from '../styles/themes/red';

type ThemeContextProps = {
  theme: typeof redTheme;
  changeTheme(themeName: typeof redTheme): void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<typeof redTheme>(() => {
    const issetThemeJSON = localStorage.getItem('theme-portfolio');

    if (issetThemeJSON === 'red-theme') {
      return redTheme;
    }
    if (issetThemeJSON === 'blue-theme') {
      return blueTheme;
    }
    if (issetThemeJSON === 'purple-theme') {
      return purpleTheme;
    }

    localStorage.setItem('theme-portfolio', 'red-theme');
    return redTheme;
  });

  const changeTheme = (themeName: typeof redTheme) => {
    setTheme(themeName);

    localStorage.setItem('theme-portfolio', themeName.className);
  };

  console.log(theme);

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}
