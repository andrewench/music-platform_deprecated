type TSharedAuthFields = Readonly<
  'firstName' | 'lastName' | 'login' | 'email' | 'password' | 'confirm'
>;

export type TSharedAllFields = Record<TSharedAuthFields, string>;

export type TSharedSignInFields = Record<
  Extract<TSharedAuthFields, 'email' | 'password'>,
  string
>;

export type TSharedSignUpFields = Record<
  Exclude<TSharedAuthFields, 'confirm'>,
  string
>;

export type TSharedSignInRestoreField = Record<'email', string>;
