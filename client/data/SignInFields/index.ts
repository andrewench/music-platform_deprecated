import { Path } from 'react-hook-form';

import { TInputRole, TSignUpFields } from '@/types';

interface ISignInFields {
  type: TInputRole;
  label: string;
  stateField: Path<TSignUpFields>;
}

export const SignInFields: ISignInFields[] = [
  {
    type: 'text',
    label: 'login.fields.firstname',
    stateField: 'firstName',
  },
  {
    type: 'text',
    label: 'login.fields.lastname',
    stateField: 'lastName',
  },
  {
    type: 'text',
    label: 'login.fields.login',
    stateField: 'login',
  },
  {
    type: 'text',
    label: 'login.fields.email',
    stateField: 'email',
  },
  {
    type: 'password',
    label: 'login.fields.password',
    stateField: 'password',
  },
  {
    type: 'password',
    label: 'login.fields.confirm',
    stateField: 'confirm',
  },
];
