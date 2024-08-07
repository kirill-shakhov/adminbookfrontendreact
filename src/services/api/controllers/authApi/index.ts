import { createApi } from '@reduxjs/toolkit/query/react';
import type { AuthResponse, CheckUserResponse, CheckUserRequest } from './authApi.types';
import {User} from '@moduleAuth/static/types/index.ts';
import {axiosBaseQuery} from "@/services/api/helpers/baseQuery.ts";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, { username: string; password: string }>({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        data: { username, password },
      }),
    }),
    registration: builder.mutation<AuthResponse, FormData>({
      query: (request) => ({
        url: 'auth/registration',
        method: 'POST',
        data: request,
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
        data: request,
      }),
    }),
    getUser: builder.query<User, void>({
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

