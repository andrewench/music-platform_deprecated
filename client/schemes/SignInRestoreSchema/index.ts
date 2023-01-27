import { SchemaOf, object, string } from 'yup';

import { TSignInRestoreField } from '@/types';

import { emailPattern } from '@/patterns';

export const SignInRestoreSchema: SchemaOf<TSignInRestoreField> =
  object().shape({
    email: string()
      .matches(emailPattern, {
        message: 'formErrors.email',
      })
      .required(),
  });
