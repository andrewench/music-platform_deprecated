type TAuthFormFields = Readonly<
  'firstName' | 'lastName' | 'login' | 'email' | 'password' | 'confirm'
>;

export type TSignInFields = Record<
  Extract<TAuthFormFields, 'login' | 'email'>,
  string
>;
export type TSignUpFields = Record<TAuthFormFields, string>;
export type TSignInRestoreField = Record<
  Extract<TAuthFormFields, 'email'>,
  string
>;