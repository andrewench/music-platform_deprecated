import React, { ReactNode } from 'react';
import { Login, Application } from '@pages';
import { PageRoutesPaths } from '@types';

interface IPageRoutes {
  path: PageRoutesPaths;
  element: ReactNode;
}

export const PageRoutes: IPageRoutes[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <Application />,
  },
];
