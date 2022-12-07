import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { GlobalCss } from './styles/GlobalCss';

function AppRoutes() {
  useEffect(() => {
    GlobalCss();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
