import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./reducers";

const store = configureStore({
  reducer: {
    countriesData: countriesSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;