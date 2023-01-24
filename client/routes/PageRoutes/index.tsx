import React, { ReactNode } from 'react';

import { Application, SignIn } from '@/pages';

import { TAppEndpoints } from '@/types';

interface IPageRoutes {
  path: TAppEndpoints;
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
