import classNames from 'classnames';

import React, { FC, ReactNode } from 'react';

import {
  ContainerGap,
  FlexAlignOnCrossAxis,
  FlexAlignOnMainAxis,
} from '@types';

import styles from './Container.module.scss';

interface IContainer {
  flex: boolean;
  column?: boolean;
  center?: boolean;
  grid?: boolean;
  align?: FlexAlignOnMainAxis;
  content?: FlexAlignOnCrossAxis;
  gap?: ContainerGap;
  className?: string;
  children: ReactNode;
}

export const Container: FC<IContainer> = ({
  flex,
  column,
  center,
  grid,
  align,
  content,
  gap,
  className,
  children,
}) => {
  return (
    <div
      className={classNames(className, {
        [styles.flexContainer]: flex,
        [styles.flexCol]: column,
        [styles.flexFullCenter]: center,
        [styles.grid]: grid,
        [styles.alignStart]: align === FlexAlignOnMainAxis.START,
        [styles.alignEnd]: align === FlexAlignOnMainAxis.END,
        [styles.alignCenter]: align === FlexAlignOnMainAxis.CENTER,
        [styles.alignStretch]: align === FlexAlignOnMainAxis.STRETCH,
        [styles.contentStart]: content === FlexAlignOnCrossAxis.START,
        [styles.contentCenter]: content === FlexAlignOnCrossAxis.CENTER,
        [styles.contentEnd]: content === FlexAlignOnCrossAxis.END,
        [styles.contentBetween]: content === FlexAlignOnCrossAxis.BETWEEN,
        [styles.contentAround]: content === FlexAlignOnCrossAxis.AROUND,
        [styles.contentEvenly]: content === FlexAlignOnCrossAxis.EVENLY,
        'gap-5': gap === ContainerGap.EXTRASMALL,
        'gap-10': gap === ContainerGap.SMALL,
        'gap-15': gap === ContainerGap.MEDIUM,
        'gap-20': gap === ContainerGap.LARGE,
        'gap-25': gap === ContainerGap.LARGE_XLARGE,
        'gap-30': gap === ContainerGap.MEDIUM_LARGE,
      })}
    >
      {children}
    </div>
  );
};
