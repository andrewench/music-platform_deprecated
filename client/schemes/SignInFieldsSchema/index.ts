import { SchemaOf, object, string } from 'yup';

import type { TSharedSignInFields } from '@/shared/types';

import { emailPattern, passwordPattern } from '@/patterns';

export const SignInFieldsSchema: SchemaOf<TSharedSignInFields> = object().shape(
  {
    email: string()
      .matches(emailPattern, {
        message: 'formErrors.email',
      })
      .required(),
    password: string()
      .matches(passwordPattern, {
        message: 'formErrors.password',
      })
      .required(),
  }
);
