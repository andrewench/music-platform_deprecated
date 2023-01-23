import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { SignInFormSigns, SignInFormSubmit } from '@/components/layout';

import { TextField } from '@/components/ui';

import { SignInFormSteps, SignInQueryType, TSignUpFields } from '@/types';

import { isAllFieldsFilled } from '@/utils';

import { SignInFields } from '@/data';

import { SignUpFieldsSchema } from '@/schemes';

import styles from './SignInForm.module.scss';

export const SignInForm = ({ step }: { step: SignInFormSteps }) => {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const methods = useForm<TSignUpFields>({
    defaultValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
      confirm: '',
    },
    mode: 'onChange',
    resolver: yupResolver(SignUpFieldsSchema),
  });

  const submitHandler: SubmitHandler<TSignUpFields> = async (
    data: TSignUpFields
  ) => {
    switch (step) {
      case 1:
        if (isAllFieldsFilled(Object.values(data))) {
          // eslint-disable-next-line no-console
          console.log(data);

          methods.reset();
          methods.clearErrors();
        }
        break;
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(submitHandler)}
        className={styles.form}
      >
        {SignInFields.map(({ label, query: { act }, ...props }, idx) => {
          const query = searchParams.get('act') as SignInQueryType;

          return (
            act.includes(query) && (
              <TextField
                label={t(label)}
                register={methods.register}
                key={idx}
                {...props}
              />
            )
          );
        })}

        <SignInFormSubmit step={step} />
      </form>

      <SignInFormSigns step={step} />
    </FormProvider>
  );
};
