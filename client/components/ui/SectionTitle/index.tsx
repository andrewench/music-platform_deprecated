import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import classNames from 'classnames';
import { Container } from '@components/global';
import { ContainerGap, FlexAlignOnMainAxis } from '@types';
import styles from './SectionTitle.module.scss';

interface ISectionTitle {
  label: string;
  labelLink: string;
  href: string;
}

export const SectionTitle: FC<ISectionTitle> = ({ label, href, labelLink }) => {
  return (
    <Container
      flex
      gap={ContainerGap.MEDIUM}
      align={FlexAlignOnMainAxis.CENTER}
      className={styles.section}
    >
      <p className={styles.label}>{label}</p>
      <span className={classNames(styles.line, 'gradient-line')} />

      <Link to={href} className={styles.link}>
        <Container
          flex
          align={FlexAlignOnMainAxis.CENTER}
          gap={ContainerGap.EXTRASMALL}
        >
          {labelLink}
          <IoArrowForward />
        </Container>
      </Link>
    </Container>
  );
};
