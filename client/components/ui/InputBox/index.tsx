import React, { ChangeEvent, FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import { ISignInFormFields, InputType } from '@/types';

import styles from './InputBox.module.scss';

interface IInputBox {
  label: string;
  stateField: Path<ISignInFormFields>;
  type: InputType;
  register: UseFormRegister<ISignInFormFields>;
  required: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: FC<IInputBox> = ({
  label,
  stateField,
  type,
  register,
  required,
  onChange,
}) => {
  return (
    <div className={styles.box}>
      <input
        className={styles.input}
        type={type}
        {...register(stateField, { required })}
        required
        onChange={onChange}
      />
      <p className={styles.label}>{label}</p>
    </div>
  );
};
