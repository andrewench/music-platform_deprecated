import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TSharedSignUpFields } from '@/shared/types';

import type { TApiEndpoints, TApiMainEndpoint } from '@/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api' as TApiMainEndpoint,
  }),
  endpoints: ({ mutation }) => ({
    addNewUser: mutation({
      query: (payload: TSharedSignUpFields) => ({
        url: '/users' as TApiEndpoints,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: payload,
      }),
    }),
  }),
});

export const { useAddNewUserMutation } = userApi;
