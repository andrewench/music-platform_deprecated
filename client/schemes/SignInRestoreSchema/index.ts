import { SchemaOf, object, string } from 'yup';

import type { TSharedSignInRestoreField } from '@/shared/types';

import { emailPattern } from '@/patterns';

export const SignInRestoreSchema: SchemaOf<TSharedSignInRestoreField> =
  object().shape({
    email: string()
      .matches(emailPattern, {
        message: 'formErrors.email',
      })
      .required(),
  });
