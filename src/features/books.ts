import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//www.googleapis.com/books/v1/volumes?q=
// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes",
  }),

  endpoints: (builder) => ({
    getBooksByName: builder.query({
      query: (name) => `?q=${name}`
    }),
    getBookById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksByNameQuery, useGetBookByIdQuery } = booksApi


