type UserModelInstanceFields =
  | 'firstname'
  | 'lastname'
  | 'login'
  | 'email'
  | 'password';

export type UserModelInstanceType = Record<UserModelInstanceFields, string>;
