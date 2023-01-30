import React, { ChangeEvent } from 'react';

import type { TMappedTypes } from '@/types';

import { useAppDispatch } from '@/hooks';

import { setUserField } from '@/slices';

export const useChangeHandlerAction = <TState extends TMappedTypes>() => {
  const dispatch = useAppDispatch();

  const fn =
    <TField extends keyof TState>(key: TField) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setUserField({
          key,
          value,
        })
      );
    };

  return fn;
};
