import { configureStore } from '@reduxjs/toolkit';

import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { userReducer } from '@/slices';

import { userApi } from '@/api';

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
