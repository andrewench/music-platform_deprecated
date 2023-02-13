import cn from 'classnames';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBarItem.module.scss';

interface ISideBarItem {
  label: string;
  icon: ReactNode;
  to: string;
}

export const SideBarItem = ({ label, icon, to }: ISideBarItem) => {
  return (
    <li className={styles.item}>
      <Link to={to} draggable={false} className={cn(styles.link, 'gap-10')}>
        <>
          {icon}
          <p>{label}</p>
        </>
      </Link>
    </li>
  );
};
