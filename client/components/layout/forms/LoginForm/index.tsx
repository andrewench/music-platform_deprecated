import { yupResolver } from '@hookform/resolvers/yup';

import React, { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormSubmit, TextField } from '@/components/ui';

import type { TSignInFields } from '@/types';

import { isAllFieldsFilled } from '@/utils';

import { useChangeHandlerAction } from '@/hooks';

import { SignInFieldsSchema } from '@/schemes';

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  const changeHandler = useChangeHandlerAction<TSignInFields>();

  const methods = useForm<TSignInFields>({
    mode: 'onChange',
    resolver: yupResolver(SignInFieldsSchema),
  });

  const submitHandler: SubmitHandler<TSignInFields> = (data: TSignInFields) => {
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
          onChange={changeHandler<keyof TSignInFields>('email')}
        />
        <TextField
          type="password"
          label={t('login.fields.password')}
          stateField="password"
          register={methods.register}
          onChange={changeHandler<keyof TSignInFields>('password')}
        />

        <FormSubmit label={t('common.signIn')} />
      </form>
    </FormProvider>
  );
};
