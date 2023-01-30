import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TApiEndpoints, TApiMainEndpoint, TSignUpFields } from '@/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api' as TApiMainEndpoint,
  }),
  endpoints: ({ mutation }) => ({
    addNewUser: mutation({
      query: (payload: TSignUpFields) => ({
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
