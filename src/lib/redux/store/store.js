import { reviewApi } from "../features/api/apiSlice";
import { contactApi } from "../features/api/contactApi";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [reviewApi.reducerPath]: reviewApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewApi.middleware, contactApi.middleware),
});

export default store;
