import { useEffect } from 'react';

import { Home } from './pages/Home';
import { GlobalCss } from './styles/GlobalCss';

function App() {
  useEffect(() => {
    GlobalCss();
  }, []);

  return <Home />;
}

export default App;
