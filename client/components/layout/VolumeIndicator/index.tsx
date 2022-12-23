import React from 'react';
import { IoVolumeMediumOutline } from 'react-icons/io5';
import { Container } from '@components/global';
import { ProgressBar } from '@components/ui';
import {
  ContainerGap,
  FlexAlignOnCrossAxis,
  FlexAlignOnMainAxis,
} from '@types';
import styles from './VolumeIndicator.module.scss';

export const VolumeIndicator = () => {
  return (
    <Container
      flex
      align={FlexAlignOnMainAxis.CENTER}
      content={FlexAlignOnCrossAxis.END}
      gap={ContainerGap.SMALL}
      className={styles.box}
    >
      <IoVolumeMediumOutline className={styles.icon} size={28} />
      <ProgressBar currentProgress={70} maxWidth={100} />
    </Container>
  );
};
