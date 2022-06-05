import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { characterApi } from "./characterApi";

const store = configureStore({
  reducer: {
    character: characterSlice,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

setupListeners(store.dispatch)

export default store;
