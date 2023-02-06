import { yupResolver } from '@hookform/resolvers/yup';

import React, { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormSubmit, TextField } from '@/components/ui';

import { TSignUpFields } from '@/types';

import { SignUpFields } from '@/data';

import { SignUpFieldsSchema } from '@/schemes';

export const SignUpForm: FC = () => {
  const { t } = useTranslation();

  const methods = useForm<TSignUpFields>({
    mode: 'onChange',
    resolver: yupResolver(SignUpFieldsSchema),
  });

  const submitHandler: SubmitHandler<TSignUpFields> = async (data) => {
    const { reset, clearErrors } = methods;

    // eslint-disable-next-line no-console
    console.log(data);

    reset();
    clearErrors();
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(submitHandler)}>
        {SignUpFields.map(({ label, stateField, ...props }, idx) => (
          <TextField
            label={t(label)}
            stateField={stateField}
            register={methods.register}
            key={idx}
            {...props}
          />
        ))}

        <FormSubmit label={t('common.signUp')} />
      </form>
    </FormProvider>
  );
};
