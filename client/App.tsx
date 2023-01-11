import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { PageRoutes } from '@/routes';

import './styles/App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        {PageRoutes.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
