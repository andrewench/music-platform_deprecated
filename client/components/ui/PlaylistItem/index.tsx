import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@components/global';

import { IPlaylistData } from '@types';

import styles from './PlaylistItem.module.scss';

export const PlaylistItem = ({
  href,
  title,
  cover,
  newStatus,
}: IPlaylistData) => {
  return (
    <Container flex column className={styles.box}>
      <Link to={href} className={styles.cover}>
        {newStatus && <span className={styles.newLabel}>New</span>}
        <img
          className={styles.image}
          src={cover}
          alt="title"
          draggable={false}
        />
      </Link>

      <p className={styles.title}>{title}</p>
    </Container>
  );
};
