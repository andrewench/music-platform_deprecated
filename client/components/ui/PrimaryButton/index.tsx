import React, { FC } from 'react';
import { ButtonType } from '@types';
import classNames from 'classnames';
import styles from './PrimaryButton.module.scss';

interface IPrimaryButton {
  label: string;
  type: ButtonType;
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
      className={classNames(styles.button, className)}
    >
      {label}
    </button>
  );
};
