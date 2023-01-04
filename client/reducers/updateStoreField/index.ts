import { Draft, PayloadAction } from '@reduxjs/toolkit';

interface IPayloadProps {
  key: string;
  value: string;
}

export const updateStoreFieldByKey = <T>(
  state: Draft<T>,
  { payload: { key, value } }: PayloadAction<IPayloadProps>
) => {
  return {
    ...state,
    [key]: value,
  };
};
