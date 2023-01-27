import React, { FC } from 'react';

import { PrimaryButton } from '@/components/ui';

import styles from './FormSubmit.module.scss';

export const FormSubmit: FC<{ label: string }> = ({ label }) => {
  return (
    <PrimaryButton type="submit" label={label} className={styles.submit} />
  );
};
