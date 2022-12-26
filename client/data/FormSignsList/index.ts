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
    label: "Are you haven't an account?",
    link: {
      href: `${PATHNAME}?act=join`,
      label: 'Sign up.',
    },
  },
  accountExists: {
    label: 'Already has an account?',
    link: {
      href: `${PATHNAME}?act=login`,
      label: 'Sign in.',
    },
  },
  forgotPassword: {
    label: 'Forgot your password?',
    link: {
      href: `${PATHNAME}?act=restore`,
      label: 'Restore.',
    },
  },
};
