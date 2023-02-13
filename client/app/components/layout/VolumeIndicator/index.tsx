import { IoVolumeMediumOutline } from 'react-icons/io5';

import { FlexContainer } from '@/components/global';

import { ProgressBar } from '@/components/ui';

import {
  ContainerGap,
  FlexAlignOnCrossAxis,
  FlexAlignOnMainAxis,
} from '@/types';

import styles from './VolumeIndicator.module.scss';

export const VolumeIndicator = () => {
  return (
    <FlexContainer
      align={FlexAlignOnMainAxis.CENTER}
      content={FlexAlignOnCrossAxis.END}
      gap={ContainerGap.SMALL}
      className={styles.box}
    >
      <IoVolumeMediumOutline className={styles.icon} size={28} />
      <ProgressBar currentProgress={70} maxWidth={100} />
    </FlexContainer>
  );
};
