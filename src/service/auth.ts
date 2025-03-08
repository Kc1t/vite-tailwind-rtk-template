import { apiSlice } from "./http";

export const uploadSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUploadToken: builder.query<{ token: string }, void>({
      query: () => ({
        url: "/auth/token",
        method: "GET",
      }),
    }),
  }),

  overrideExisting: true,
});

export const { useGetUploadTokenQuery } = uploadSlice;
