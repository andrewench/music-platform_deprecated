interface IFormSignKey {
  label: string;
  link: {
    href: string;
    label: string;
  };
}

type FormSignKeys = 'accountNoExists' | 'accountExists' | 'forgotPassword';

type FormSign = {
  [K in FormSignKeys]: IFormSignKey;
};

const PATHNAME = '/signin';

export const FormSignList: FormSign = {
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
