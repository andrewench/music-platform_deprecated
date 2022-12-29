import { ShowcaseListenersList } from '@data';

import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@components/global';

import styles from './ShowcaseListeners.module.scss';

export const ShowcaseListeners = () => {
  return (
    <div className={styles.box}>
      <p className={styles.label}>Listening now:</p>
      <Container flex>
        {ShowcaseListenersList.map(({ href, cover }, idx) => (
          <Link to={href} key={idx}>
            <img
              className={styles.avatar}
              src={cover}
              alt="User profile"
              draggable={false}
            />
          </Link>
        ))}
      </Container>
    </div>
  );
};
