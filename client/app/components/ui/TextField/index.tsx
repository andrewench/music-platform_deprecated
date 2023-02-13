import cn from 'classnames';

import { HTMLAttributes } from 'react';
import {
  FieldValues,
  Path,
  UseFormRegister,
  useFormContext,
  useWatch,
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
}: ITextField<T>) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext<T>();

  const fieldValue = useWatch({
    name: stateField,
  });

  return (
    <div className={styles.box}>
      <input
        type={type}
        autoComplete="off"
        className={cn(styles.input, {
          [styles.filled]: Boolean(fieldValue),
          [styles.error]: errors[stateField],
        })}
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
