import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import cartDrawerSlice from "./slices/cartDrawerSlice";
export const store = configureStore({
  reducer: {
    product: cartSlice,
    drawer:cartDrawerSlice
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
