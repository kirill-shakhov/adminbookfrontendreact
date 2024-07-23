import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthResponse, CheckUserResponse, CheckUserRequest } from './authApi.types';
import { UserState } from '@moduleAuth/static/types/index.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, { username: string; password: string }>({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { username, password },
      }),
    }),
    registration: builder.mutation<AuthResponse, FormData>({
      query: (request) => ({
        url: 'auth/registration',
        method: 'POST',
        body: request,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
    checkUser: builder.query<CheckUserResponse, CheckUserRequest>({
      query: (request) => ({
        url: 'auth/check-user',
        method: 'POST',
        body: request,
      }),
    }),
    getUser: builder.query<UserState, void>({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
    }),
    refresh: builder.query<AuthResponse, void>({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLogoutMutation,
  useCheckUserQuery,
  useGetUserQuery,
  useRefreshQuery,
} = authApi;
