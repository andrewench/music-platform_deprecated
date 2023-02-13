import { FC } from 'react';

import { PrimaryButton } from '@/components/ui';

import styles from './FormSubmit.module.scss';

interface IFormSubmit {
  label: string;
  disabled?: boolean;
}

export const FormSubmit: FC<IFormSubmit> = ({ label, disabled = false }) => {
  return (
    <PrimaryButton
      disabled={disabled}
      type="submit"
      label={label}
      className={styles.submit}
    />
  );
};
