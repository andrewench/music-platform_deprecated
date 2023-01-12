import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { FlexContainer } from '@/components/global';

import { Footer, Header, SideBar } from '@/components/layout';

import { ViewRoutes } from '@/routes';

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
      <FlexContainer>
        <SideBar />

        <FlexContainer column>
          <Header />

          <Routes>
            {ViewRoutes.map(({ path, element }, idx) => (
              <Route key={idx} path={path} element={element} />
            ))}
          </Routes>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer>
        <Footer />
      </FlexContainer>
    </>
  );
};
