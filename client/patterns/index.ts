type TFormPatternRoles = Readonly<'password' | 'names' | 'email' | 'login'>;
type TFormPatterns = {
  [K in `${TFormPatternRoles}Pattern`]: RegExp;
};

const FormPatterns: TFormPatterns = {
  namesPattern: /\b[^0-9^\s]{2,}\b/,
  passwordPattern:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
  loginPattern: /[\w\\_?\d*]+/,
  emailPattern: /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/,
};

export const { passwordPattern, namesPattern, loginPattern, emailPattern } =
  FormPatterns;
