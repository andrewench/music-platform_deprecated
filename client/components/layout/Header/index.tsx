import { HeaderLinks } from '@data';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '@components/global';

import { HeaderLink } from '@components/ui';

import { FlexAlignOnMainAxis } from '@types';

import styles from './Header.module.scss';

export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.box}>
      <Container
        flex
        align={FlexAlignOnMainAxis.CENTER}
        className={styles.content}
      >
        {HeaderLinks.map(({ to, label }, idx) => (
          <HeaderLink
            active={location.pathname === to}
            to={to}
            label={label}
            key={idx}
          />
        ))}
      </Container>
    </header>
  );
};
