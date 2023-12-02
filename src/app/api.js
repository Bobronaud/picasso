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
      query: () => `/`,
    }),
  }),
});

export const { useGetPostByIdQuery, useGetAllPostsQuery } = api;
