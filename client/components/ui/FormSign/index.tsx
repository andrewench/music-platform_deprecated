import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@components/global';
import { ContainerGap, FlexAlignOnCrossAxis } from '@types';
import styles from './FormSign.module.scss';

interface IFormSign {
  label: string;
  link: {
    href: string;
    label: string;
  };
}

export const FormSign: FC<IFormSign> = ({ label, link }) => {
  return (
    <Container
      flex
      gap={ContainerGap.EXTRASMALL}
      content={FlexAlignOnCrossAxis.CENTER}
      className={styles.label}
    >
      <span>{label}</span>
      <Link to={link.href} className={styles.link}>
        {link.label}
      </Link>
    </Container>
  );
};
