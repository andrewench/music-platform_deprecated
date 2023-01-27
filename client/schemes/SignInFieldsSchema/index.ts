import { SchemaOf, object, string } from 'yup';

import { TSignInFields } from '@/types';

import { emailPattern, passwordPattern } from '@/patterns';

export const SignInFieldsSchema: SchemaOf<TSignInFields> = object().shape({
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
});
