import React, { ReactNode } from 'react';
import {
  Playlists,
  Podcasts,
  Artists,
  Albums,
  Account,
  Messenger,
  Friends,
  Subscriptions,
  LikedSongs,
  Settings,
} from '@views';
import { ViewRoutesPaths } from '@types';

interface IViewRoutes {
  path: ViewRoutesPaths;
  element: ReactNode;
}

export const ViewRoutes: IViewRoutes[] = [
  {
    path: '/podcasts',
    element: <Podcasts />,
  },
  {
    path: '/playlists',
    element: <Playlists />,
  },
  {
    path: '/artists',
    element: <Artists />,
  },
  {
    path: '/albums',
    element: <Albums />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/messenger',
    element: <Messenger />,
  },
  {
    path: '/friends',
    element: <Friends />,
  },
  {
    path: '/subscriptions',
    element: <Subscriptions />,
  },
  {
    path: '/favourites',
    element: <LikedSongs />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
];
