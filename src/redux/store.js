import { configureStore } from "@reduxjs/toolkit";
import gistReducer from "./slice";

export const store = configureStore({
  reducer: {
    gists: gistReducer,
  },
});