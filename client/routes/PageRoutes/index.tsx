import React, { ReactNode } from 'react';

import { Application, SignIn } from '@/pages';

import { PageRoutesPaths } from '@/types';

interface IPageRoutes {
  path: PageRoutesPaths;
  element: ReactNode;
}

export const PageRoutes: IPageRoutes[] = [
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/*',
    element: <Application />,
  },
];
