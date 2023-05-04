import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  GoogleBook, GoogleBookCollection } from "../models/books";

const apiKey = 'AIzaSyCSBhChQeia_4vfZwtSh0_R20IT8hHioY8'
// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes",
  }),

  endpoints: (builder) => ({
    getBooksByName: builder.query<GoogleBookCollection, string>({
      query: (name) => `?q=${name}&key=${apiKey}`
    }),
    getBookById: builder.query<GoogleBook, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksByNameQuery, useGetBookByIdQuery } = booksApi


