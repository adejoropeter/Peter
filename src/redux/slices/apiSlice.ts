import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:3023/" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({}),
});
