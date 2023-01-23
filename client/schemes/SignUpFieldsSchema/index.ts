import { SchemaOf, object, string } from 'yup';

import { TSignUpFields } from '@/types';

import {
  emailPattern,
  loginPattern,
  namesPattern,
  passwordPattern,
} from '@/patterns';

export const SignUpFieldsSchema: SchemaOf<TSignUpFields> = object().shape({
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
