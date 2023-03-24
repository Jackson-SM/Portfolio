import React, { createContext, useState, useEffect } from 'react';

import { darkTheme } from '../styles/themes-mode/darkTheme';
import { lightTheme } from '../styles/themes-mode/lightTheme';

type ThemeContextProps = {
  theme: string;
  changeTheme(): void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(() => {
    const issetThemeJSON = localStorage.getItem('theme-mode');

    if (issetThemeJSON) {
      const html = document.querySelector('html');

      html?.classList.remove(...html.classList);

      html?.classList.add(issetThemeJSON === 'darkTheme' ? darkTheme : lightTheme);
      return issetThemeJSON;
    }

    return 'darkTheme';
  });

  console.log(theme);

  const changeThemeInHTMLTag = () => {
    const html = document.querySelector('html');
    html?.classList.remove(...html.classList);
    html?.classList.add(theme === 'darkTheme' ? lightTheme : darkTheme);
  };

  const changeTheme = () => {
    setTheme((themeName) => (themeName === 'darkTheme' ? 'lightTheme' : 'darkTheme'));

    changeThemeInHTMLTag();
  };

  useEffect(() => {
    localStorage.setItem('theme-mode', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}
