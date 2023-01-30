import cn from 'classnames';

import React, { HTMLAttributes } from 'react';
import {
  FieldValues,
  Path,
  UseFormRegister,
  useFormContext,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TInputRole } from '@/types';

import styles from './TextField.module.scss';

interface ITextField<T extends FieldValues>
  extends HTMLAttributes<HTMLInputElement> {
  label: string;
  stateField: Path<T>;
  register: UseFormRegister<T>;
  type: TInputRole;
}

export const TextField = <T extends FieldValues>({
  label,
  stateField,
  type,
  register,
  ...props
}: ITextField<T>) => {
  const { t } = useTranslation();
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.box}>
      <input
        type={type}
        className={cn(styles.input, {
          [styles.filled]: Boolean(watch(stateField)),
          [styles.error]: errors[stateField],
        })}
        {...register(stateField, { required: true })}
        {...props}
      />

      <p className={styles.label}>{label}</p>

      {errors[stateField] && (
        <span className={styles.helper}>
          {t(String(errors[stateField]?.message))}
        </span>
      )}
    </div>
  );
};
