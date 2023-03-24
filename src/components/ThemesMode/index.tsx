import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';

import { useTheme } from '../../hooks/useTheme';
import { CircleThemeMode, StyledThemeModes } from './styles';

export function ThemesMode() {
  const { changeTheme, theme } = useTheme();

  const activeThemed = theme === 'darkTheme';

  return (
    <StyledThemeModes onClick={changeTheme}>
      <CircleThemeMode active={activeThemed}>
        <BsFillSunFill />
      </CircleThemeMode>
    </StyledThemeModes>
  );
}
