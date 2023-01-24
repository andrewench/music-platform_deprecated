import cn from 'classnames';

import React, { FC } from 'react';

import { TButtonRole } from '@/types';

import styles from './PrimaryButton.module.scss';

interface IPrimaryButton {
  label: string;
  type: TButtonRole;
  className?: string;
}

export const PrimaryButton: FC<IPrimaryButton> = ({
  label,
  type,
  className,
}) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={cn(styles.button, className)}
    >
      {label}
    </button>
  );
};
