import cn from 'classnames';

import React, { FC } from 'react';

import { TButtonRole } from '@/types';

import styles from './PrimaryButton.module.scss';

interface IPrimaryButton {
  label: string;
  type: TButtonRole;
  disabled?: boolean;
  className?: string;
}

export const PrimaryButton: FC<IPrimaryButton> = ({
  label,
  type,
  disabled = false,
  className,
}) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
      className={cn(styles.button, className, {
        [styles.disabled]: disabled,
      })}
    >
      {label}
    </button>
  );
};
