import cn from 'classnames';

import React, { FC } from 'react';
import { Path, UseFormRegister, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { InputType, TSignUpFields } from '@/types';

import styles from './TextField.module.scss';

interface ITextField {
  label: string;
  stateField: Path<TSignUpFields>;
  register: UseFormRegister<TSignUpFields>;
  type: InputType;
}

export const TextField: FC<ITextField> = ({
  label,
  stateField,
  type,
  register,
}) => {
  const { t } = useTranslation();
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.box}>
      <input
        className={cn(styles.input, {
          [styles.filled]: Boolean(watch(stateField)),
          [styles.error]: errors[stateField],
        })}
        type={type}
        {...register(stateField, { required: true })}
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
