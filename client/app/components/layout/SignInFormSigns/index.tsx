import { useTranslation } from 'react-i18next';

import { FormSign } from '@/components/ui';

import { SignInFormSteps } from '@/types';

import { FormSignsList } from '@/data';

export const SignInFormSigns = ({ step }: { step: SignInFormSteps }) => {
  const { forgotPassword, accountNoExists, accountExists } = FormSignsList;
  const { t } = useTranslation();

  if (step === SignInFormSteps.LOGIN) {
    return (
      <>
        <FormSign
          label={t(forgotPassword.label)}
          link={{
            href: forgotPassword.link.href,
            label: `${t(forgotPassword.link.label)}.`,
          }}
        />

        <FormSign
          label={t(accountNoExists.label)}
          link={{
            href: accountNoExists.link.href,
            label: `${t(accountNoExists.link.label)}.`,
          }}
        />
      </>
    );
  }

  return (
    <FormSign
      label={t(accountExists.label)}
      link={{
        href: accountExists.link.href,
        label: `${t(accountExists.link.label)}.`,
      }}
    />
  );
};
