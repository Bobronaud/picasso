import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts',
  }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllPosts: builder.query({
      query: ({ limit = 10, start = 0 }) => ({
        url: '/',
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
  }),
});

export const { useGetPostByIdQuery, useGetAllPostsQuery } = api;
