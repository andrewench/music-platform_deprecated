import classNames from 'classnames';

import React, { FC, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import styles from './ViewContainer.module.scss';

interface IViewContainer {
  className?: string;
  children: ReactNode;
}

export const ViewContainer: FC<IViewContainer> = ({ className, children }) => {
  return (
    <SimpleBar className={styles.scroll}>
      <div className={classNames(styles.box, className)}>{children}</div>
    </SimpleBar>
  );
};
