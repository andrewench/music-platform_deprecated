import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  ApiEndpointsType,
  MainApiRouteType,
  SignUpFieldsType,
} from '@/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api' as MainApiRouteType,
  }),
  endpoints: (build) => ({
    addNewUser: build.mutation({
      query: (payload: SignUpFieldsType) => ({
        url: '/users' as ApiEndpointsType,
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
