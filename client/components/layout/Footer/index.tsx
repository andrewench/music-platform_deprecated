import cn from 'classnames';
import isElectron from 'is-electron';

import React from 'react';

import { Container } from '@/components/global';

import {
  AudioPlayer,
  ShowcaseListeners,
  VolumeIndicator,
} from '@/components/layout';

import { FlexAlignOnCrossAxis } from '@/types';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <Container
      flex
      content={FlexAlignOnCrossAxis.BETWEEN}
      className={cn(styles.box, {
        [styles.rounded]: isElectron(),
      })}
    >
      <ShowcaseListeners />
      <AudioPlayer />
      <VolumeIndicator />
    </Container>
  );
};
