import type { IContextActionParams, TLanguageCodesList } from '@/types';

export interface IGlobalContext {
  language: {
    value: TLanguageCodesList;
    setValue: ({ field, key, value }: IContextActionParams) => void;
  };
  theme: {
    mode: string;
    setValue: ({ field, key, value }: IContextActionParams) => void;
  };
}
