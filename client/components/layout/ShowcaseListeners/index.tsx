import cn from 'classnames';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FlexContainer } from '@/components/global';

import { ShowcaseListenersList } from '@/data';

import styles from './ShowcaseListeners.module.scss';

export const ShowcaseListeners = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <p className={styles.label}>{t('common.listeningNow')}:</p>
      <FlexContainer>
        {ShowcaseListenersList.map(({ href, cover, played }, idx) => (
          <Link
            to={href}
            className={cn(styles.link, {
              [styles.played]: played,
              [styles.paused]: !played,
            })}
            key={idx}
          >
            <img
              className={styles.avatar}
              src={cover}
              alt="User profile"
              draggable={false}
            />
          </Link>
        ))}
      </FlexContainer>
    </div>
  );
};
