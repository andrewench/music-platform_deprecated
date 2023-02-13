import { ReactNode } from 'react';

import { TViewEndpoints } from '@/types';

import {
  Account,
  Albums,
  Artists,
  Friends,
  LikedSongs,
  Messenger,
  Playlists,
  Podcasts,
  Settings,
  Subscriptions,
} from '@/views';

interface IViewRoutes {
  path: TViewEndpoints;
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
