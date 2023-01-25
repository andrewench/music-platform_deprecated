import React, { FC, ReactNode, createContext, useMemo, useState } from 'react';

import { IContextActionParams, TLanguageCodesList } from '@/types';

import { AppConfig } from '@/config';

export const DataContext = createContext(AppConfig);

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState({
    language: {
      value: 'en' as TLanguageCodesList,
    },
    theme: {
      mode: 'light',
    },
  });

  const setValue = ({ field, key, value }: IContextActionParams) => {
    setData((prevState) => ({
      ...prevState,
      [field]: {
        [key]: value,
      },
    }));
  };

  const memoizedConfig = useMemo(
    () => ({
      language: {
        value: data.language.value,
        setValue,
      },
      theme: {
        mode: data.theme.mode,
        setValue,
      },
    }),
    [data]
  );

  return (
    <DataContext.Provider value={memoizedConfig}>
      {children}
    </DataContext.Provider>
  );
};
