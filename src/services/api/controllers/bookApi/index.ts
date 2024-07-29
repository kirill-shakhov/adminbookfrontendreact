import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api/helpers/baseQuery.ts";
import { BooksResponse, UploadBookResponse, AuthorsResponse, GenresResponse } from "@/services/api/controllers/bookApi/bookApi.types.ts";
import { Book } from "@/modules/book/static/types";

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({

    getUserBooks: builder.query<BooksResponse, void>({
      query: () => ({
        url: '/books',
        method: 'GET',
      }),
    }),

    uploadNewBook: builder.mutation<UploadBookResponse, FormData>({
      query: (request) => ({
        url: '/books/upload',
        method: 'POST',
        data: request,
      }),
    }),

    getBook: builder.query<Book, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'GET',
      }),
    }),

    deleteBook: builder.mutation<string, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
    }),

    getGenres: builder.query<GenresResponse, void>({
      query: () => ({
        url: '/books/genres',
        method: 'GET',
      }),
    }),

    getAuthors: builder.query<AuthorsResponse, void>({
      query: () => ({
        url: '/books/authors',
        method: 'GET',
      }),
    }),

  }),
});

export const {
  useGetUserBooksQuery,
  useUploadNewBookMutation,
  useGetBookQuery,
  useDeleteBookMutation,
  useGetGenresQuery,
  useGetAuthorsQuery
} = bookApi;
