import React, { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { InputType, ISignInFormFields } from '@types';
import styles from './InputBox.module.scss';

interface IInputBox {
  label: string;
  field: Path<ISignInFormFields>;
  type: InputType;
  register: UseFormRegister<ISignInFormFields>;
  required: boolean;
}

export const InputBox: FC<IInputBox> = ({
  label,
  field,
  type,
  register,
  required,
}) => {
  return (
    <div className={styles.box}>
      <input
        className={styles.input}
        type={type}
        {...register(field, { required })}
        required
      />
      <p className={styles.label}>{label}</p>
    </div>
  );
};
