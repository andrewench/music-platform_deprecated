import React, { ChangeEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { SignInFormSigns, SignInFormSubmit } from '@components/layout';

import { InputBox } from '@components/ui';

import { ISignInFormFields, SignInFormSteps, SignInQueryType } from '@types';

import { isAllFieldsFilled } from '@utils';

import { SignInFields } from '@data';

import { useAppDispatch } from '@hooks';

import { setUserField } from '@slices';

import styles from './SignInForm.module.scss';

export const SignInForm = ({ step }: { step: SignInFormSteps }) => {
  const { register, handleSubmit, reset } = useForm<ISignInFormFields>();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const submitHandler: SubmitHandler<ISignInFormFields> = async (
    data: Omit<ISignInFormFields, 'confirm'>
  ) => {
    switch (step) {
      case 1:
        if (isAllFieldsFilled(Object.values(data))) {
          // eslint-disable-next-line no-console
          console.log(data);

          reset();
        }
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        {SignInFields.map(({ type, label, field, query: { act } }, idx) => {
          const query = searchParams.get('act') as SignInQueryType;

          return (
            act.includes(query) && (
              <InputBox
                type={type}
                label={t(label)}
                field={field}
                register={register}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setUserField({
                      key: field,
                      value: e.target.value,
                    })
                  )
                }
                key={idx}
                required
              />
            )
          );
        })}

        <SignInFormSubmit step={step} />
      </form>

      <SignInFormSigns step={step} />
    </>
  );
};
