import { yupResolver } from '@hookform/resolvers/yup';

import React, { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormSubmit, TextField } from '@/components/ui';

import type { TSharedAllFields } from '@/shared/types';

import { isAllFieldsFilled } from '@/utils';

import { SignInFields } from '@/data';

import { useChangeHandlerAction } from '@/hooks';

import { SignUpFieldsSchema } from '@/schemes';

export const SignUpForm: FC = () => {
  const { t } = useTranslation();

  const changeHandler = useChangeHandlerAction<TSharedAllFields>();

  const methods = useForm<TSharedAllFields>({
    mode: 'onChange',
    resolver: yupResolver(SignUpFieldsSchema),
  });

  const submitHandler: SubmitHandler<TSharedAllFields> = (data) => {
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
        {SignInFields.map(({ label, stateField, ...props }, idx) => (
          <TextField
            label={t(label)}
            stateField={stateField}
            register={methods.register}
            key={idx}
            {...props}
            onChange={changeHandler<keyof TSharedAllFields>(stateField)}
          />
        ))}

        <FormSubmit label={t('common.signUp')} />
      </form>
    </FormProvider>
  );
};
