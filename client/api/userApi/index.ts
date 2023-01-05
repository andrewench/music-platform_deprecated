import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (build) => ({
    addNewUser: build.mutation({
      query: (payload) => ({
        url: '/users',
        method: 'PUT',
        body: payload,
      }),
    }),
  }),
});

export const { useAddNewUserMutation } = userApi;
