import { Path } from 'react-hook-form';

import { ISignInFormFields, InputType, SignInQueryType } from '@types';

interface ISignInFields {
  type: InputType;
  label: string;
  query: {
    act: SignInQueryType[];
  };
  field: Path<ISignInFormFields>;
}

export const SignInFields: ISignInFields[] = [
  {
    type: 'text',
    label: 'login.fields.firstname',
    field: 'firstname',
    query: {
      act: ['join'],
    },
  },
  {
    type: 'text',
    label: 'login.fields.lastname',
    field: 'lastname',
    query: {
      act: ['join'],
    },
  },
  {
    type: 'text',
    label: 'login.fields.login',
    field: 'login',
    query: {
      act: ['login', 'join'],
    },
  },
  {
    type: 'text',
    label: 'login.fields.email',
    field: 'email',
    query: {
      act: ['join', 'restore'],
    },
  },
  {
    type: 'password',
    label: 'login.fields.password',
    field: 'password',
    query: {
      act: ['login', 'join'],
    },
  },
  {
    type: 'password',
    label: 'login.fields.confirm',
    field: 'confirm',
    query: {
      act: ['join'],
    },
  },
];
