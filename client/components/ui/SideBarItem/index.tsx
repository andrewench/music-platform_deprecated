import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SideBarItem.module.scss';

interface ISideBarItem {
  label: string;
  icon: unknown;
  to: string;
}

export const SideBarItem = ({ label, icon, to }: ISideBarItem) => {
  return (
    <li className={styles.item}>
      <Link
        to={to}
        draggable={false}
        className={classNames(styles.link, 'gap-10')}
      >
        <>
          {icon}
          <p>{label}</p>
        </>
      </Link>
    </li>
  );
};
