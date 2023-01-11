import React from 'react';

import { Container } from '@/components/global';

import { ProgressBarBox } from '@/components/layout';

import {
  ContainerGap,
  FlexAlignOnCrossAxis,
  FlexAlignOnMainAxis,
} from '@/types';

import { AudioPlayerButtons } from '@/data';

import styles from './AudioPlayer.module.scss';

export const AudioPlayer = () => {
  return (
    <Container
      flex
      column
      align={FlexAlignOnMainAxis.CENTER}
      content={FlexAlignOnCrossAxis.CENTER}
      gap={ContainerGap.MEDIUM}
    >
      <Container
        flex
        align={FlexAlignOnMainAxis.CENTER}
        content={FlexAlignOnCrossAxis.CENTER}
      >
        {AudioPlayerButtons.map(({ icon }, idx) => (
          <button className={styles.button} type="button" key={idx}>
            <span>{icon}</span>
          </button>
        ))}
      </Container>

      <ProgressBarBox currentProgress={30} maxWidth={380} />
    </Container>
  );
};
