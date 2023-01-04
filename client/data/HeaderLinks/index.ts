interface IHeaderLinks {
  to: string;
  label: string;
}

export const HeaderLinks: IHeaderLinks[] = [
  {
    to: '/podcasts',
    label: 'header.podcasts',
  },
  {
    to: '/playlists',
    label: 'header.playlists',
  },
  {
    to: '/artists',
    label: 'header.artists',
  },
  {
    to: '/albums',
    label: 'header.albums',
  },
];
