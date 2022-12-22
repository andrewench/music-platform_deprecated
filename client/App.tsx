import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApplicationRoutes } from '@routes';
import { Container } from '@components/global';
import { SideBar, Header, AudioPlayer } from '@components/layout';
import './styles/App.scss';

const App = () => {
  return (
    <>
      <Container flex>
        <SideBar />

        <Container flex column>
          <Header />

          <Router>
            <Routes>
              {ApplicationRoutes.map(({ path, element }, idx) => (
                <Route key={idx} path={path} element={element} />
              ))}
            </Routes>
          </Router>
        </Container>
      </Container>

      <Container flex>
        <AudioPlayer />
      </Container>
    </>
  );
};

export default App;
