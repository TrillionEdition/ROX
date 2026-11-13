import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Policy from './pages/Policy';
import { policies } from './pages/policies';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {policies.map((policy) => <Route key={policy.path} path={policy.path} element={<Policy policy={policy} />} />)}
    </Routes>
  );
}

export default App;