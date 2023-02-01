import React, { createContext, useState, useEffect } from 'react';

type ThemeContextProps = {
  theme: string;
  changeTheme(themeName: string): void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(() => {
    const issetThemeJSON = localStorage.getItem('theme-portfolio');

    if (issetThemeJSON) {
      return issetThemeJSON;
    }

    localStorage.setItem('theme-portfolio', 'red-theme');
    return 'red-theme';
  });

  const changeTheme = (themeName: string) => {
    setTheme(themeName);
  };

  console.log(theme);

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}
