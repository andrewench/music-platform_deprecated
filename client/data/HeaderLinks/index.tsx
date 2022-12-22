interface IHeaderLinks {
  to: string;
  label: string;
}

export const HeaderLinks: IHeaderLinks[] = [
  {
    to: '/podcasts',
    label: 'Podcasts',
  },
  {
    to: '/playlists',
    label: 'Playlists',
  },
  {
    to: '/artists',
    label: 'Artists',
  },
  {
    to: '/albums',
    label: 'Albums',
  },
];
