import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/660/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `items`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
