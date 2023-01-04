import { createSlice } from '@reduxjs/toolkit';

import { ISignInFormFields } from '@types';

import { updateStoreFieldByKey } from '@reducers';

const initialState: ISignInFormFields = {} as ISignInFormFields;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserField: updateStoreFieldByKey<ISignInFormFields>,
  },
});

export const { setUserField } = userSlice.actions;
export const userReducer = userSlice.reducer;
