import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/data/" }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => "products.json",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
