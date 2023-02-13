import { SchemaOf, object, string } from 'yup';

import type { TSharedAllFields } from '@/shared/types';

import {
  emailPattern,
  loginPattern,
  namesPattern,
  passwordPattern,
} from '@/patterns';

export const SignUpFieldsSchema: SchemaOf<TSharedAllFields> = object().shape({
  firstName: string()
    .matches(namesPattern, {
      message: 'formErrors.firstname',
    })
    .required(),
  lastName: string()
    .matches(namesPattern, {
      message: 'formErrors.lastname',
    })
    .required(),
  login: string()
    .matches(loginPattern, {
      message: 'formErrors.login',
    })
    .required(),
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
  confirm: string()
    .matches(passwordPattern, {
      message: 'formErrors.confirm',
    })
    .required(),
});
