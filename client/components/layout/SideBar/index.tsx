import { SideBarItems } from '@data';
import classNames from 'classnames';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/global';

import { SideBarItem } from '@components/ui';

import { FlexAlignOnCrossAxis, FlexAlignOnMainAxis } from '@types';

import styles from './SideBar.module.scss';

export const SideBar = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <Container flex column className={classNames(styles.box, className)}>
      <div className={styles.avatarBox}>
        <img
          src="/images/avatar.png"
          alt="Jessie Carrillo's Avatar"
          draggable={false}
        />
      </div>

      <Container
        flex
        column
        align={FlexAlignOnMainAxis.START}
        className={styles.paddingContainer}
      >
        <p className={styles.username}>Jessie Carrillo</p>
        <Container
          flex
          content={FlexAlignOnCrossAxis.BETWEEN}
          align={FlexAlignOnMainAxis.CENTER}
        >
          <p className={styles.id}>@jessica_carillo</p>
          <p className={styles.lastOnline}>12:32 pm</p>
        </Container>

        <ul className={styles.menu}>
          {SideBarItems.map(({ label, ...props }, idx) => (
            <SideBarItem label={t(label)} {...props} key={idx} />
          ))}
        </ul>
      </Container>
    </Container>
  );
};
