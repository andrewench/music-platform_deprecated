import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { SignUpFieldsType } from '@types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (build) => ({
    addNewUser: build.mutation({
      query: (payload: SignUpFieldsType) => ({
        url: '/users',
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
