import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import { en, zh } from '@languages';

export class TranslateService {
  public static currentLanguage = 'en';

  public static async init() {
    await i18n.use(initReactI18next).init({
      lng: TranslateService.currentLanguage,
      resources: {
        en: {
          translation: en,
        },
        zh: {
          translation: zh,
        },
      },
    });

    return i18n;
  }
}
