import React from 'react';
import { useTranslation } from 'react-i18next';

import { PrimaryButton } from '@/components/ui';

import { SignInFormSteps } from '@/types';

import styles from './SignInFormSubmit.module.scss';

export const SignInFormSubmit = ({ step }: { step: SignInFormSteps }) => {
  const { t } = useTranslation();

  const SUBMIT_LABELS = ['signIn', 'signUp', 'sendCode'];

  return (
    <PrimaryButton
      type="submit"
      label={t(`common.${SUBMIT_LABELS[step]}`)}
      className={styles.submit}
    />
  );
};
