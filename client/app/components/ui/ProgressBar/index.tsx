import { IProgressBarOptions } from '@/types';

import { calculateProgress } from '@/utils';

import styles from './ProgressBar.module.scss';

export const ProgressBar = ({
  currentProgress,
  maxWidth,
}: IProgressBarOptions) => {
  return (
    <div className={styles.box}>
      <div
        style={{ width: `${String(maxWidth)}px` }}
        className={styles.track}
      />
      <div
        style={{
          width: `${String(
            calculateProgress({
              currentProgress,
              maxProgress: maxWidth,
            })
          )}px`,
        }}
        className={styles.drag}
      />
    </div>
  );
};
