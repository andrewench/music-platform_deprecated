import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@slices';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
