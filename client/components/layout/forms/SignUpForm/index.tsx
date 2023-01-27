import { yupResolver } from '@hookform/resolvers/yup';

import React, { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormSubmit, TextField } from '@/components/ui';

import { TSignUpFields } from '@/types';

import { isAllFieldsFilled } from '@/utils';

import { SignInFields } from '@/data';

import { SignUpFieldsSchema } from '@/schemes';

export const SignUpForm: FC = () => {
  const { t } = useTranslation();

  const methods = useForm<TSignUpFields>({
    mode: 'onChange',
    resolver: yupResolver(SignUpFieldsSchema),
  });

  const submitHandler: SubmitHandler<TSignUpFields> = (data) => {
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
        {SignInFields.map(({ label, ...props }, idx) => (
          <TextField
            label={t(label)}
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
