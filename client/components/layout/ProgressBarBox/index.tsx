import React from 'react';

import { Container } from '@/components/global';

import { ProgressBar } from '@/components/ui';

import {
  ContainerGap,
  FlexAlignOnCrossAxis,
  FlexAlignOnMainAxis,
  IProgressBarOptions,
} from '@/types';

import styles from './ProgressBarBox.module.scss';

export const ProgressBarBox = ({
  currentProgress,
  maxWidth,
}: IProgressBarOptions) => {
  return (
    <Container
      flex
      align={FlexAlignOnMainAxis.CENTER}
      content={FlexAlignOnCrossAxis.CENTER}
      gap={ContainerGap.MEDIUM}
    >
      <p className={styles.time}>2:32</p>
      <ProgressBar currentProgress={currentProgress} maxWidth={maxWidth} />
      <p className={styles.time}>3:39</p>
    </Container>
  );
};
