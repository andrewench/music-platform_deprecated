import cn from 'classnames';

import React, { FC } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Container } from '@/components/global';

import { ContainerGap, FlexAlignOnMainAxis } from '@/types';

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
      <span className={cn(styles.line, 'gradient-line')} />

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
