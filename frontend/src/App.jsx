import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Current path:', pathname);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;