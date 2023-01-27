import React, { FC } from 'react';

import {
  LoginForm,
  RestoreForm,
  SignInFormSigns,
  SignUpForm,
} from '@/components/layout';

import { SignInFormSteps } from '@/types';

export const AuthForm: FC<{ step: SignInFormSteps }> = ({ step }) => {
  const renderedForms = [<LoginForm />, <SignUpForm />, <RestoreForm />];

  return (
    <>
      {renderedForms[step]}

      <SignInFormSigns step={step} />
    </>
  );
};
