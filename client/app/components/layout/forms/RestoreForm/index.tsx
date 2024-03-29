import { yupResolver } from '@hookform/resolvers/yup';

import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormSubmit, TextField } from '@/components/ui';

import type { TSharedSignInRestoreField } from '@/shared/types';

import { isAllFieldsFilled } from '@/utils';

import { SignInRestoreSchema } from '@/schemes';

export const RestoreForm: FC = () => {
  const { t } = useTranslation();

  const methods = useForm<TSharedSignInRestoreField>({
    mode: 'onChange',
    resolver: yupResolver(SignInRestoreSchema),
  });

  const submitHandler: SubmitHandler<TSharedSignInRestoreField> = (data) => {
    const { reset, clearErrors } = methods;

    if (isAllFieldsFilled(Object.values(data))) {
      // eslint-disable-next-line no-console
      console.log(data);

      reset();
      clearErrors();
    }
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(submitHandler)}>
        <TextField
          type="email"
          label={t('login.fields.email')}
          stateField="email"
          register={methods.register}
        />

        <FormSubmit label={t('common.sendCode')} />
      </form>
    </FormProvider>
  );
};
