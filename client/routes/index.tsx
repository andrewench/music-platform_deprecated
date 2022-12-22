import React, { ReactNode } from 'react';
import { Playlists } from '@views';

interface IApplicationRoutes {
  path: string;
  element: ReactNode;
}

export const ApplicationRoutes: IApplicationRoutes[] = [
  {
    path: '/playlists',
    element: <Playlists />,
  },
];
