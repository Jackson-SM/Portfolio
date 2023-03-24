import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { blueTheme } from '../../styles/themes-colors/blue';
import { purpleTheme } from '../../styles/themes-colors/purple';
import { redTheme } from '../../styles/themes-colors/red';
import * as Theme from './styles';

type ThemeBoxProps = {
  theme: typeof redTheme;
  color: string;
  title: string;
};

export function ThemeBox({ theme, color, title }: ThemeBoxProps) {
  const { changeTheme } = useTheme();

  return <Theme.StyledThemeBox css={{ background: `${color}` }} />;
}

export function Themes() {
  const [visible, setVisible] = useState<boolean>(true);

  const changeVisible = () => {
    setVisible((wasVisible) => !wasVisible);
  };

  return (
    <Theme.StyledTheme visible={visible}>
      <span>Cores</span>
      <Theme.ThemesContainer>
        <Theme.HideThemeBox className="hide-button" onClick={changeVisible}>
          {visible ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Theme.HideThemeBox>
        <ThemeBox theme={redTheme} color="hsl(350, 74%, 51%)" title="Red Theme" />
        <ThemeBox theme={purpleTheme} color="hsl(280, 100%, 60%)" title="Purple Theme" />
        <ThemeBox theme={blueTheme} color="hsl(207, 100%, 50%)" title="Blue Theme" />
      </Theme.ThemesContainer>
    </Theme.StyledTheme>
  );
}
