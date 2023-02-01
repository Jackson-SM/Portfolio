import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useTheme } from './hooks/useTheme';
import { Home } from './pages/Home';
import { GlobalCss } from './styles/GlobalCss';

function AppRoutes() {
  const { theme } = useTheme();

  useEffect(() => {
    GlobalCss();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home className={theme} />} />
    </Routes>
  );
}

export default AppRoutes;
