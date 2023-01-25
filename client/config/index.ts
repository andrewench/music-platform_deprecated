import type { IGlobalContext, TLanguageCodesList } from '@/types';

/* eslint-disable @typescript-eslint/no-empty-function */
export const AppConfig: IGlobalContext = {
  language: {
    value: 'en' as TLanguageCodesList,
    setValue: () => {},
  },
  theme: {
    mode: 'light',
    setValue: () => {},
  },
};
