import i18next, { i18n } from 'i18next';

import { FC, ReactNode } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { en, zh } from '@/languages';

interface ITranslateProvider {
  config: i18n;
  children: ReactNode;
}

export const TranslateProvider: FC<ITranslateProvider> = ({
  config,
  children,
}) => {
  return <I18nextProvider i18n={config}>{children}</I18nextProvider>;
};

export const initTranslateConfig = async () => {
  await i18next.use(initReactI18next).init({
    lng: 'en',
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
  });

  return i18next;
};
