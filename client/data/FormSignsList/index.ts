interface IFormSignKey {
  label: string;
  link: {
    href: string;
    label: string;
  };
}

type FormSignKeysType = 'accountNoExists' | 'accountExists' | 'forgotPassword';
type FormSignType = Record<FormSignKeysType, IFormSignKey>;

const PATHNAME = '/signin';

export const FormSignsList: FormSignType = {
  accountNoExists: {
    label: 'login.signs.accountNoExists',
    link: {
      href: `${PATHNAME}?act=join`,
      label: 'common.signUp',
    },
  },
  accountExists: {
    label: 'login.signs.accountExists',
    link: {
      href: `${PATHNAME}?act=login`,
      label: 'common.signIn',
    },
  },
  forgotPassword: {
    label: 'login.signs.forgotPassword',
    link: {
      href: `${PATHNAME}?act=restore`,
      label: 'common.restore',
    },
  },
};
