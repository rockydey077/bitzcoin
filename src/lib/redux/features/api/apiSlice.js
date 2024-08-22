import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviews",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://paymentsitebackend.onrender.com/api",
  }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "/review",
      providesTags: ["reviews"],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi;
