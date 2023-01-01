interface IShowcaseListenersList {
  href: string;
  cover: string;
  played: boolean;
}

export const ShowcaseListenersList: IShowcaseListenersList[] = [
  {
    href: '/profile?id=1',
    cover: '/images/avatars/avatar_1.png',
    played: true,
  },
  {
    href: '/profile?id=2',
    cover: '/images/avatars/avatar_2.png',
    played: true,
  },
  {
    href: '/profile?id=3',
    cover: '/images/avatars/avatar_3.png',
    played: false,
  },
  {
    href: '/profile?id=4',
    cover: '/images/avatars/avatar_4.png',
    played: false,
  },
];
