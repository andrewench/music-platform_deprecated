import { createSlice } from '@reduxjs/toolkit';

import { TSignUpFields } from '@/types';

import { updateStoreFieldByKey } from '@/reducers';

const initialState: TSignUpFields = {} as TSignUpFields;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserField: updateStoreFieldByKey<TSignUpFields>,
  },
});

export const { setUserField } = userSlice.actions;
export const userReducer = userSlice.reducer;
