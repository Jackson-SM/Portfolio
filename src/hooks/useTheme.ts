import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeProvider';

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return {
    theme,
    changeTheme,
  };
};
