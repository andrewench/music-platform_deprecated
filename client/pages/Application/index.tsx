import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Container } from '@components/global';

import { Footer, Header, SideBar } from '@components/layout';

import { ViewRoutes } from '@routes';

export const Application = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/playlists');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Container flex>
        <SideBar />

        <Container flex column>
          <Header />

          <Routes>
            {ViewRoutes.map(({ path, element }, idx) => (
              <Route key={idx} path={path} element={element} />
            ))}
          </Routes>
        </Container>
      </Container>

      <Container flex>
        <Footer />
      </Container>
    </>
  );
};
