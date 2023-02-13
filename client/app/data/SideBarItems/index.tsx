import { ReactNode } from 'react';
import {
  IoChatbubblesOutline,
  IoHeartOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoRadioOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

interface ISideBarItems {
  to: string;
  label: string;
  icon: ReactNode;
}

export const SideBarItems: ISideBarItems[] = [
  {
    to: '/account',
    label: 'sidebar.account',
    icon: <IoPersonOutline size={18} />,
  },
  {
    to: '/messenger',
    label: 'sidebar.messenger',
    icon: <IoChatbubblesOutline size={18} />,
  },
  {
    to: '/friends',
    label: 'sidebar.friends',
    icon: <IoPeopleOutline size={18} />,
  },
  {
    to: '/subscriptions',
    label: 'sidebar.subscriptions',
    icon: <IoRadioOutline size={18} />,
  },
  {
    to: '/favourites',
    label: 'sidebar.liked',
    icon: <IoHeartOutline size={18} />,
  },
  {
    to: '/settings',
    label: 'sidebar.settings',
    icon: <IoSettingsOutline size={18} />,
  },
];
