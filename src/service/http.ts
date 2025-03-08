import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tags } from "../enum/tags";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: Object.values(Tags),
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({}),
  keepUnusedDataFor: 300,
  refetchOnMountOrArgChange: false,
});

export default apiSlice;
