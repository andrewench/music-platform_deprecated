import { Draft, PayloadAction } from '@reduxjs/toolkit';

import type { TMappedTypes } from '@/types';

interface IPayloadProps<K extends keyof TMappedTypes> {
  key: K;
  value: string;
}

export const updateStoreFieldByKey = <TState extends TMappedTypes>(
  state: Draft<TState>,
  { payload: { key, value } }: PayloadAction<IPayloadProps<keyof TState>>
) => {
  return {
    ...state,
    [key]: value,
  };
};
