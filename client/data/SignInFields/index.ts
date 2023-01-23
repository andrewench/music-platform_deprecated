import { Path } from 'react-hook-form';

import { InputType, SignInQueryType, TSignUpFields } from '@/types';

interface ISignInFields {
  type: InputType;
  label: string;
  query: {
    act: SignInQueryType[];
  };
  stateField: Path<TSignUpFields>;
}

export const SignInFields: ISignInFields[] = [
  {
    type: 'text',
    label: 'login.fields.firstname',
    stateField: 'firstName',
    query: {
      act: ['join'],
    },
  },
  {
    type: 'text',
    label: 'login.fields.lastname',
    stateField: 'lastName',
    query: {
      act: ['join'],
    },
  },
  {
    type: 'text',
    label: 'login.fields.login',
    stateField: 'login',
    query: {
      act: ['login', 'join'],
    },
  },
  {
    type: 'text',
    label: 'login.fields.email',
    stateField: 'email',
    query: {
      act: ['join', 'restore'],
    },
  },
  {
    type: 'password',
    label: 'login.fields.password',
    stateField: 'password',
    query: {
      act: ['login', 'join'],
    },
  },
  {
    type: 'password',
    label: 'login.fields.confirm',
    stateField: 'confirm',
    query: {
      act: ['join'],
    },
  },
];
