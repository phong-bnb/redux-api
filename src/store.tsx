// store.ts
import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from "./dogSlices";

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
