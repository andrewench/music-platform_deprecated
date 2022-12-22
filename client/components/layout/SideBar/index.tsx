import React from 'react';
import classNames from 'classnames';
import { Container } from '@components/global';
import styles from './SideBar.module.scss';

interface ISideBar {
  className?: string;
}

export const SideBar = ({ className }: ISideBar) => {
  return (
    <Container flex column className={classNames(styles.box, className)}>
      SideBar
    </Container>
  );
};
