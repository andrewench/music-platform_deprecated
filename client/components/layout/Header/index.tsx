import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@components/global';
import { HeaderLink } from '@components/ui';
import { HeaderLinks } from '@data';
import { FlexAlignOnMainAxis } from '@types';
import styles from './Header.module.scss';

export const Header = () => {
  const location = useLocation();

  return (
    <Container flex align={FlexAlignOnMainAxis.CENTER} className={styles.box}>
      {HeaderLinks.map(({ to, label }, idx) => (
        <HeaderLink
          active={location.pathname === to}
          to={to}
          label={label}
          key={idx}
        />
      ))}
    </Container>
  );
};
