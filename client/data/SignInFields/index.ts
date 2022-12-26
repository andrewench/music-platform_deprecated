import { Path } from 'react-hook-form';
import { InputType, ISignInFormFields, SignInQueryType } from '@types';

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
    label: 'Firstname',
    field: 'firstname',
    query: {
      act: ['join'],
    },
  },
  {
    type: 'text',
    label: 'Lastname',
    field: 'lastname',
    query: {
      act: ['join'],
    },
  },
  {
    type: 'text',
    label: 'Login',
    field: 'login',
    query: {
      act: ['login', 'join'],
    },
  },
  {
    type: 'text',
    label: 'Email',
    field: 'email',
    query: {
      act: ['join', 'restore'],
    },
  },
  {
    type: 'password',
    label: 'Password',
    field: 'password',
    query: {
      act: ['login', 'join'],
    },
  },
  {
    type: 'password',
    label: 'Confirm password',
    field: 'confirm',
    query: {
      act: ['join'],
    },
  },
];
