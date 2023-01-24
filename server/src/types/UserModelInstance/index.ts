type TUserModelInstanceFields =
  | 'firstname'
  | 'lastname'
  | 'login'
  | 'email'
  | 'password';

export type TUserModelInstance = Record<TUserModelInstanceFields, string>;
